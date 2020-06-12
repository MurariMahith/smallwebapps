$(document).ready(()=>
    {
        $('#btn').mouseenter(()=>{$('#btn').css("background-color","darkgray")})
        $('#btn').mouseleave(()=>{$('#btn').css("background-color","lightgray")})
        $('#btn').click(()=>
        {
            
            if($('#cat1').val().trim()=='' || $('#cat2').val().trim()=='' || $('#da1').val().trim()=='' || $('#da2').val().trim()=='' || $('#da3').val().trim()=='')
            {
                alert('Enter the details');
                window.location.reload()
            }
            else if($('#cat1').val()>50 || $('#cat2').val()>50 || $('#da1').val()>10 || $('#da2').val()>10 || $('#da3').val()>10 || $('add').val()>10)
            {
                alert('Enter correct details');
                window.location.reload()
            }
            else if($("#add").val()>10)
            {
                alert('additional learning is for only 10 marks!')
                window.location.reload()
            }
            else
            {
                var x=50/15
                var cat1avg=($('#cat1').val())/x;
                var cat2avg=($('#cat2').val())/x;
                var cattotal=(cat1avg+cat2avg+Number($('#da1').val())+Number($('#da2').val())+Number($('#da3').val()));
                var fatm=cattotal*(2/3)
                var fatm2=fatm.toFixed(2)
                var fattotal=cattotal+fatm+Number($("#add").val())
                var fattotal2=fattotal.toFixed(2);
                if(fattotal2>100)
                {
                    fattotal2=100;
                }
                if(fattotal<50)
                {
                    $('#h1t').css('color','red')
                    $("#h1").css('color','black')
                }
                console.log(fatm)
                $("#h1").html(fatm2);
                $("#h1t").html(fattotal2);
                $('.visible').css('visibility','visible');
                if(fattotal<50)
                {
                $("#h1t").mouseenter(()=>{$("#h1t").html("you've failed")})
                $("#h1t").mouseleave(()=>{$("#h1t").html(fattotal2)});
                }
                else
                {
                    $("#h1t").mouseenter(()=>{$("#h1t").html("you've passed")})
                    $("#h1t").mouseleave(()=>{$("#h1t").html(fattotal2)});
                }
            }
        })
    });