<template>
<div class="wrapper">

</div>


</template>
<!-- jquery, popper and bootstrap js --><script src="/red/jquery-3.3.1.min.js"></script><script src="/red/popper.min.js"></script><script src="/red/bootstrap/js/bootstrap.min.js"></script><!-- swiper js --><script src="/red/swiper/swiper-bundle.min.js"></script><!-- cookie js --><script src="/red/jquery.cookie.js"></script><script charset="utf-8" src="/static_new/js/dialog.min.js"></script><link rel="stylesheet" href="/public/js/layer_mobile/need/layer.css"><script src="/public/js/layer_mobile/layer.js"></script><script charset="utf-8" src="/static_new/js/common.js"></script><!-- template custom js --><script src="/red/main.js?v=V1.24"></script><script src="/ping/check.online.js"></script><!--<script src="https://www.recaptcha.net/recaptcha/1api.js?render=6LdC99EZAAAAABfzI41Q48ZSd2Pe2aHA_vJ61go4"></script>--><span style="display: none;"><audio id="audio" src="/static_new/img/hongbao.mp3" controls="controls"></audio></span><script>$(function() {
  $('.footer').find('.btn-link-default').eq(2).addClass("active");
});
var cid = "0";
var oid = '';
var add_id = '';
var countdown = "1",
        tt1 = 2478;
var audio = document.getElementById("audio");
var loading;
var isShare = ("0" == '0');
$(function() {
  $('.footer li').eq(2).addClass("on");
  $('#autoStart').click(function() {
    if ($('#autoStart').text() == "Start grabbing orders") {
      countdown = "1";
      var order_submit_gif = "/static/loding.gif";
      if (!order_submit_gif) {
        order_submit_gif = "/static_indonesia/img/money-loading.gif";
      }
      $('#autoStart').text("Get order");
      loading = $(document).dialog({
        type: 'notice',
        infoIcon: '',
        infoText: "<img src='" + order_submit_gif + "' style='width:128px;height:128px; margin: 10px'>",
        autoClose: 0
      });

      try {
        grecaptcha.ready(function() {
          grecaptcha.execute('6LdC99EZAAAAABfzI41Q48ZSd2Pe2aHA_vJ61go4', {
            action: 'submit'
          }).then(function(token) {
            // Add your logic to submit to your backend server here.
            start(token, 3);
          });
        });
      } catch(e) {
        console.log(e);
        start('', 3);
      }
    }
  });
  $('#autoStart2').click(function() {
    if ($('#autoStart2').text() == "One click Finish") {
      $('#orderDetail2').modal('show');

      var dnum=Number(60)-Number(2);
      console.log(dnum,000);
      var start=1;
      loading = $(document).dialog({
        type: 'notice',
        infoIcon: '/static_new/img/loading.gif',
        infoText: "Ordering",
        autoClose: 0
      });
    //   console.log(start,111);
      setTimeout(function () {
        qdstart(start,dnum)
        loading.close();
      }, 5000);
    }
  });
});
function qdstart(start,dnum){
  var token='6LdC99EZAAAAABfzI41Q48ZSd2Pe2aHA_vJ61go4';
  var v=3;
  $.ajax({
    url: "/index/rot_order/submit_order2.html" + '?cid=' + cid + '&reCAPTCHA=' + token + '&v=' + v + '&m=' + Math.random(),
    timeout: 5000,
    type: 'POST',
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      //loading.close();
      $('#autoStart').text("Start grabbing orders");
      //grecaptcha.reset();
      $(document).dialog({
        infoText: "the network is not stable, please try again on a signal bomb!!",
        autoClose: 2000
      });
      return
    },
    success: function(data) {
      $('#autoStart').text("Start grabbing orders");
      if (data.code == -1) { //address
        $(document).dialog({
          infoText: data.info,
          autoClose: 2000
        });
        $('#orderDetail2').modal('hide');
        setTimeout(function() {
                  location.href = "/index/my/edit_address.html";
                },
                2000);
      } else if (data.code == -2) { //bank card
        $(document).dialog({
          infoText: data.info,
          autoClose: 2000
        });
        $('#orderDetail2').modal('hide');
        setTimeout(function() {
                  location.href = "/index/my/bind_bank.html";
                },
                2000);
      } else if (data.code == 1) {
        //console.log(888888888)
        //$(document).dialog({infoText: data.info, autoClose: 2000});
        $('#orderDetail2').modal('hide');
        $(document).dialog({
          type: 'alert',
          titleText: data.info,
          buttonTextConfirm: "Confirm",
          autoClose: 0
        });
      } else if (data.code == 0 && data.yj) {


        $("#jdt").val(parseFloat(start/dnum).toFixed(2));
        $("#jdnum").html(parseFloat(start/dnum*100).toFixed(2));
        //return false;
        /*if(start==1){
            $("#wcsp").append(' \n '+data.gname);
        }else{
            $("#wcsp").append(' \n '+","+data.gname);
        }*/
        $("#wcsp").html(data.gname);
        $("#wcyj").html(data.yj);
        /*if(start==1){
            $("#wcyj").html(data.yj);
        }else{
            var yj=parseFloat($("#wcyj").html()).toFixed(2)*1+parseFloat(data.yj).toFixed(2)*1;
             $("#wcyj").html(parseFloat(yj).toFixed(2));
        }*/
        // console.log(start,111);
        var loading = $(document).dialog({
          type: 'notice',
          infoIcon: '/static_new/img/loading.gif',
          infoText: "Ordering",
          autoClose: 0
        });
        if(start<dnum){

          setTimeout(function () {
            qdstart(Number(start)+1,dnum)
            loading.close();
          }, 3000);
          //setTimeout(qdstart(Number(start)+1,dnum), 5000);
        }else{
          loading.close();
          $(document).dialog({
            infoText: "success"
          });
        }


      } else {
        $('#orderDetail2').modal('hide');
        //grecaptcha.reset();
        console.log(data.info);
        if (data.info) {
          $(document).dialog({
            infoText: data.info,
            autoClose: 2000
          });
        } else {
          $(document).dialog({
            infoText: "A rede não é estável, por favor, tente novamente em um bom sinal!",
            autoClose: 2000
          });
        }
      }
    }
  });
//   console.log(start,222);
//   console.log(dnum,444);

}
function startV2(token) {
  $('#reCAPTCHA_V2').modal('hide');
  $('#autoStart').text("Ordering");
  loading = $(document).dialog({
    type: 'notice',
    infoIcon: '/static_new/img/loading.gif',
    infoText: "Ordering",
    autoClose: 0
  });
  start(token, 2);
}

function palySong(wi) {
  audio.load();
  stopSong();
  audio.play();
  if (wi == 0) {
    audio.pause();
  }
}

function stopSong() {
  audio.pause();
}

function qdSuccess(oid) {
  $('#orderDetail').modal('show');
  $.ajax({
    url: "/index/order/order_info",
    type: "POST",
    dataType: "JSON",
    data: {
      id: oid
    },
    success: function(res) {
      // console.log(res)
      var data = res.data;
      if (res.code == 0) {
        $('#otime').html(data.addtime)
        $('#oid').html(data.oid)
        $('#otitle').html(data.goods_name)
        $('#oimg').attr('src', data.goods_pic)
        $('#oprice').html(data.goods_price)
        $('#onum').html(data.goods_count)
        $('#ototal').html(data.num)
        $('#yongjin').html(data.commission)
        $('#ad_link').html(data.ad_link);
        $('#copy_link').parent().attr('link', data.ad_link);
		
		if(data.isliandan)
		{
			$('#lporder').html("【Continuous order:"+data.lno+"】");
		}
		else if(data.liandanno>0){
			$('#lporder').html("【Urgent order】");
		}
		else
			$('#lporder').html("");
      }
    },
    error: function(err) {
      console.log(err)
    }
  })
}

function start(token, v) {
  //console.log(countdown)
  if (countdown <= 0) {
    //$('#orderDetail').modal('show');
    //------------------------------------------------------------------
    $.ajax({
      url: "/index/rot_order/submit_order.html" + '?cid=' + cid + '&reCAPTCHA=' + token + '&v=' + v + '&m=' + Math.random(),
      timeout: 3000,
      type: 'POST',

      error: function(XMLHttpRequest, textStatus, errorThrown) {
        loading.close();
        $('#autoStart').text("Start grabbing orders");
        //grecaptcha.reset();
        $(document).dialog({
          infoText: "A rede não é estável, por favor, tente novamente em um bom sinal!",
          autoClose: 2000
        });
      },
      success: function(data) {
        loading.close();
        $('#autoStart').text("Start grabbing orders");
        if (data.code == -1) { //address
          loading.close();
          $(document).dialog({
            infoText: data.info,
            autoClose: 2000
          });
          setTimeout(function() {
                    location.href = "/index/my/edit_address.html";
                  },
                  2000);
        } else if (data.code == -2) { //bank card
          loading.close();
          $(document).dialog({
            infoText: data.info,
            autoClose: 2000
          });
          setTimeout(function() {
                    location.href = "/index/my/bind_bank.html";
                  },
                  2000);
        } else if (data.code == 1) {
          loading.close();
          //$(document).dialog({infoText: data.info, autoClose: 2000});
          $(document).dialog({
            type: 'alert',
            titleText: data.info,
            buttonTextConfirm: "Confirm",
            autoClose: 0
          });
        } else if (data.code == 0 && data.oid) {
          loading.close();
          palySong(1);
          sessionStorage.setItem('oid', data.oid);
          $(document).dialog({
            infoText: data.info,
            autoClose: 500
          });
          qdSuccess(data.oid);
          oid = data.oid;
          add_id = data.add_id;
          // 自动提交订单
        //   if(data.is_consecutive_order) {
        //       setTimeout(function() {
        //       doOrder()
        //     }, 500);
        //   }
        setTimeout(function() {
              //$('#orderDetail').modal('hide');
              doOrder()
            }, 500);
        } else {
          loading.close();
          //grecaptcha.reset();
          //console.log(data.info);
          if (data.info) {
            $(document).dialog({
              infoText: data.info,
              autoClose: 2000
            });
          } else {
            $(document).dialog({
              infoText: "A rede não é estável, por favor, tente novamente em um bom sinal!",
              autoClose: 2000
            });
          }
        }
      }
    });

    //------------------------------------------------------------------
  } else {
    countdown--;
    setTimeout(function() {
              start(token, v)
            },
            1000);
  }

}

function sum(m, n) {
  var num = Math.floor(Math.random() * (m - n) + n);
  return num;
}

// 提交订单(支付)
function doOrder() {
     if (!isShare) {
    $(document).dialog({
      infoText: "Order submission",
      autoClose: 2000
    });
    return;
  }
  var publish_to = $(this).parent().siblings().find('select[name=publish_to]');
  var to_name = publish_to.find('option:selected').attr('to_name');
  var aid = publish_to.find('option:selected').attr('aid');
  var add_id = publish_to.val();
  var i = 0;
  layer.open({
    type: 2,
    content: "Matching merchant information",
    time: zhujiTime,
    shadeClose: false,
  });

  var timer = setInterval(function() {
            i++;
            if (i == 1) {
              layer.open({
                type: 2,
                content: "Generate product order",
                time: zhujiTime,
                shadeClose: false,
              })
            } else if (i == 2) {
              // 检查余额是否足够支付订单
              $.ajax({
                url: "/index/order/checkBalanceWithOrder",
                 type: "POST",
                  dataType: "JSON",
                  data: {
                    oid: oid
                  },
                  success: function(res) {
                     if(res.code == 0) {
                        layer.open({
                            type: 2,
                            content: "Order submission completed",
                            time: shopTime,
                            shadeClose: false,
                        })
                     }
                  },
                  error: function(err) {
                      
                  }
              })
              
              var ajaxT = setTimeout(function() {
                        $.ajax({
                          url: "/index/order/do_order",
                          type: "POST",
                          dataType: "JSON",
                          data: {
                            oid: oid,
                            add_id: add_id,
                            to_name: to_name,
                            aid: aid
                          },
                          success: function(res) {
                            layer.closeAll();
                            // console.log(res)
                            if (res.code == 0) {
                              $(document).dialog({
                                infoText: "Order processing completed",
                                autoClose: 2000
                              });
                              clearInterval(timer);
                              if(res.is_consecutive_order) {
                                    setTimeout(() => {
                                        start('', 3);
                                    }, 1000)
                                }else {
                                 var linkTime = setTimeout(function() {
                                    location.reload()
                                    
                                  },
                                  1800);
                                }
                            } else {
                              $(document).dialog({
                                type: 'alert',
                                titleText: res.info,
                                buttonTextConfirm: "Confirm",
                                autoClose: 0,
                                onClickConfirmBtn: function() {
                                    location.reload()
                                }
                              });
                            }
                            sumbit = true;
                          },
                          error: function(err) {
                            layer.closeAll();
                            console.log(err);
                            sumbit = true;
                          }
                        })
                      },
                      shopTime)
            }
          },
          zhujiTime)
}

$('.tabs_btn1').click(function() {
  if ("0" == 1) {
    $(document).dialog({
      type: 'confirm',
      titleText: "Confirme cancelamento?",
      buttonTextConfirm: "confirme",
      buttonTextCancel: "cancelar",
      autoClose: 0,
      onClickConfirmBtn: function() {
        $.ajax({
          url: "/index/order/do_order",
          type: "POST",
          dataType: "JSON",
          data: {
            oid: oid,
            status: 2
          },
          success: function(res) {
            layer.closeAll();
            // console.log(res)
            if (res.code == 0) {
              $(document).dialog({
                infoText: "Ordem Cancela o sucess!",
                autoClose: 2000
              });
              $('#orderDetail').modal('hide');
            } else {
              $(document).dialog({
                type: 'alert',
                titleText: res.info,
                buttonTextConfirm: "Confirm",
                autoClose: 0
              });
            }
            sumbit = true;
          },
          error: function(err) {
            console.log(err);
            sumbit = true;
          }
        });
      },
      onClickCancelBtn: function() {

      }
    });
  } else {
    $('#orderDetail').modal('hide');
  }
});

$('.close').click(function() {
  $('#orderDetail').modal('hide');
});

$(function() {
  $('.add_link').click(function() {
    $('#add_link_popup').modal('show');
    $('#publish_to').hide();
  });
  $('.add_link_save').click(function() {
    var to_name = $('input[name=to_name]').val();
    var add_id = $('input[name=add_id]').val();
    if (to_name == '' || add_id == '') {
      $(document).dialog({
        infoText: 'Não pode estar vazio!'
      });
      return;
    }
    var option = '<option value="' + add_id + '" to_name="' + to_name + '" selected>[' + to_name + ']' + add_id + '</option>';
    $('#publish_to').prepend(option);
    $('#publish_to').show();
    $('#add_link_popup').modal('hide');
  });
  $('.add_link_cancel').click(function() {
    $('#publish_to').show();
    $('#add_link_popup').modal('hide');
  });

  $('.copy_link').hide();
  $('.copy_link').click(function() {
    isShare = true;
    var link = $(this).parent().parent().siblings('span').text();
    copy_txt(link);
  });
  $('.send_with_whatsapp').click(function() {
    isShare = true;
    var link = $(this).parent().parent().siblings('span').text();
    var group = $('select[name=publish_to]').val();
    var text = $('#share_text').val().replace("{link}", link).replace("{group}", group);
    window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(text));
  });

  $('.send_with_telegram').click(function() {
    isShare = true;
    var link = $(this).parent().parent().siblings('span').text();
    var group = $('select[name=publish_to]').val();
    var text = $('#share_text').val().replace("{link}", link).replace("{group}", group);
    window.open('https://telegram.me/share/url?url=' + encodeURI(link) + '&text=' + encodeURIComponent(text));
  });

  $('.send_with_tweet').click(function() {
    isShare = true;
    var link = $(this).parent().parent().siblings('span').text();
    var group = $('select[name=publish_to]').val();
    var text = $('#share_text').val().replace("{link}", link).replace("{group}", group);
    window.open('https://twitter.com/intent/tweet?via=&text=' + encodeURIComponent(text) + "&url=" + encodeURI(link) + "&related=" + encodeURIComponent('ShopeeTH: ' + text));
  });

  $('#vip_modal').on('shown.bs.modal',
          function() {
            $('.vip-slide').width('100%');
            var swiper = new Swiper('.vip-slide', {
              slidesPerView: 'auto',
              spaceBetween: 0,
              pagination: {
                el: '.swiper-pagination',
              },
            });
          })
})
var zhujiTime = "1";
var shopTime = "2";

zhujiTime = zhujiTime * 1000;
shopTime = shopTime * 1000;
//提交
$('.tabs_btn2').click(function() {
  //--------------------------------
  if (!isShare) {
    $(document).dialog({
      infoText: "Order submission",
      autoClose: 2000
    });
    return;
  }
  var publish_to = $(this).parent().siblings().find('select[name=publish_to]');
  var to_name = publish_to.find('option:selected').attr('to_name');
  var aid = publish_to.find('option:selected').attr('aid');
  var add_id = publish_to.val();
  var i = 0;
  layer.open({
    type: 2,
    content: "Matching merchant information",
    time: zhujiTime,
    shadeClose: false,
  });

  var timer = setInterval(function() {
            i++;
            if (i == 1) {
              layer.open({
                type: 2,
                content: "Generate product order",
                time: zhujiTime,
                shadeClose: false,
              })
            } else if (i == 2) {
              // 检查余额是否足够支付订单
              $.ajax({
                url: "/index/order/checkBalanceWithOrder",
                 type: "POST",
                  dataType: "JSON",
                  data: {
                    oid: oid
                  },
                  success: function(res) {
                     if(res.code == 0) {
                        layer.open({
                            type: 2,
                            content: "Order submission completed",
                            time: shopTime,
                            shadeClose: false,
                        })
                     }
                  },
                  error: function(err) {
                      
                  }
              })
              
              var ajaxT = setTimeout(function() {
                        $.ajax({
                          url: "/index/order/do_order",
                          type: "POST",
                          dataType: "JSON",
                          data: {
                            oid: oid,
                            add_id: add_id,
                            to_name: to_name,
                            aid: aid
                          },
                          success: function(res) {
                            layer.closeAll();
                            // console.log(res)
                            if (res.code == 0) {
                              $(document).dialog({
                                infoText: "Order processing completed",
                                autoClose: 2000
                              });
                              clearInterval(timer);
                             if(res.is_consecutive_order) {
                                    setTimeout(() => {
                                        start('', 3);
                                    }, 1000)
                                }else {
                                 var linkTime = setTimeout(function() {
                                    location.reload()
                                  },
                                  1800);
                                }
                            } else {
                              $(document).dialog({
                                type: 'alert',
                                titleText: res.info,
                                buttonTextConfirm: "Confirm",
                                autoClose: 0
                              });
                            }
                            sumbit = true;
                          },
                          error: function(err) {
                            layer.closeAll();
                            console.log(err);
                            sumbit = true;
                          }
                        })
                      },
                      shopTime)
            }
          },
          zhujiTime)

});

function copy_txt(xx) {
  //var text = document.createElement('input');
  var text = document.getElementById("webcopyinput");
  text.id = 'webcopyinput';
  text.value = '' + xx + '';
  //text.style.position = 'fixed';
  // text.style.top = '- 10000px';
  // document.body.appendChild(text);
  text.focus(); //给input输入框聚焦
  text.setSelectionRange(0, text.value.length); //设置input框选中的范围
  copied = document.execCommand('Copy'); //执行复制操作
  text.blur();
  copied = false;
  document.body.scrollTop = 0;
  $(document).dialog({
    infoText: 'Copie o sucesso'
  });
}</script>
<style lang="css" scoped>
	.wrapper {
  height: 1200px;
  width: 550px;
  padding-left: 0px;
	background: linear-gradient(to bottom, #ffccff 0%, #ffffff 50%);
	margin: auto;
  text-align: center;
  padding-bottom: -50px;
  z-index: 1;
	}

  .float1 {
    width: 500px;
    border: 2px;
    border-color: blue;
    display: inline-block;
    position: absolute;
    top:0; 
    left:30;
    z-index: 1;
    padding-top: 220px;
    padding-left: 25px;
    display:block;
    margin: auto;
  }
	.panel{
    width: 500px;
    height: 120px;
    border-radius: 15px;
    display: inline-block;
    position: relative;
    z-index: 2;
    background: #ffffff;
    display:block;

  }
  .balance-text{
text-align: left;
padding-top: 20px;
padding-left: 20px;
font-size:30px;


  }
        .round-button {
    background: purple;
    color: white;
    font-size:35px;
    font-weight: bold;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    text-align: center;
    margin-top: 30px;
    margin-right: 90px;
    } 
  .signup {
    height: 50px;
    width: 400px;
    background-color: purple;
    color: white;
    font-size:25px;
    border-radius: 25px;
    border-color: rgb(129, 58, 129);
    border-width: 2px;
    margin-top: 75px;
    margin-right: 80px;
    margin-bottom: 30px;
  } 
  .header {
    text-align: right;

  }
  .container-title {
  text-align: center;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 50px 0 20px 0;
    font-size: 60px;
  }
  .center {
    text-align: center;
    margin: auto;
    }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
      .form-control {
    height: 30px;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    border-color: purple;
    border-width: 2px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    }



    .purple-button {
    background: linear-gradient(to bottom, #ffccff 50%, #ffffff 100%);
    border-color: gold;
	border-style: outset;
	border-width: 5px;
    height: 30px;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    border-color: purple;
    border-width: 2px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    }

  .is-xl {
    font-size: 1.7rem;
  }
</style>
