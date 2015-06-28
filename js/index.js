
$(document).ready(function(){

    var myDate = new Date();
    var selectyear = myDate.getFullYear();
    var selectmonth = myDate.getMonth()+1;
    var selectyearmonth = selectyear+"年"+selectmonth + "月";
    $("#yearmonth_id").text(selectyearmonth);


    showhideday(selectyear,selectmonth);
    Judge_week(selectyear,selectmonth);
	

    $("#left_select").click(function(){

        if(selectmonth>1)
          selectmonth--;
        else{
          selectmonth = 12;
          selectyear--;
        }

        selectyearmonth = selectyear+"年"+selectmonth + "月";

        $("#yearmonth_id").text(selectyearmonth);
        showhideday(selectyear,selectmonth);
        Judge_week(selectyear,selectmonth);
		
		for(var j=1;j<=31;j++){
			$("#day"+j).css({"width":"20px","height":"16px","line-height":"16px","margin-top":"0px"});

      $("#day"+j).mouseover(function(){
        var id=this.id.substr(3);
        $("#day"+id).css({"width":"25px","height":"22px","line-height":"22px","margin-top":"-6px"});
      });
          
      $("#day"+j).mouseleave(function(){
        var id=this.id.substr(3);
        $("#day"+id).css({"width":"20px","height":"16px","line-height":"16px","margin-top":"0px"});
      });

		}
		

    });

    $("#right_select").click(function(){

        if(selectmonth<12)
          selectmonth++;
        else{
          selectmonth = 1;
          selectyear++;
        }

        selectyearmonth = selectyear+"年"+selectmonth + "月";
        $("#yearmonth_id").text(selectyearmonth);

        showhideday(selectyear,selectmonth);
        Judge_week(selectyear,selectmonth);
		for(var j=1;j<=31;j++){
			$("#day"+j).css({"width":"20px","height":"16px","line-height":"16px","margin-top":"0px"});

      $("#day"+j).mouseover(function(){
        var id=this.id.substr(3);
        $("#day"+id).css({"width":"25px","height":"22px","line-height":"22px","margin-top":"-6px"});
      });
          
      $("#day"+j).mouseleave(function(){
        var id=this.id.substr(3);
        $("#day"+id).css({"width":"20px","height":"16px","line-height":"16px","margin-top":"0px"});
      });
      
		}
		
    });

    for(var i=1;i<=31;i++){
      $("#day"+i).click(function(){
        var id=this.id.substr(3);
        var time= selectyear+"年" + selectmonth + "月" + id + "日";
    		$("#day"+id).css({"width":"25px","height":"22px","line-height":"22px","margin-top":"-6px"});
    		$("#day"+id).unbind("mouseover");
    		$("#day"+id).unbind("mouseleave");
    		for(var j=1;j<=31;j++){
    			if(j!=id){
    				$("#day"+j).css({"width":"20px","height":"16px","line-height":"16px","margin-top":"0px"});
    				$("#day"+j).mouseover(function(){
    					var id=this.id.substr(3);
    					$("#day"+id).css({"width":"25px","height":"22px","line-height":"22px","margin-top":"-6px"});
    				});
    			
    				$("#day"+j).mouseleave(function(){
    					var id=this.id.substr(3);
    					$("#day"+id).css({"width":"20px","height":"16px","line-height":"16px","margin-top":"0px"});
    				});
    			}
    			
    		}
        //这里填写你要进行的操作
    //    alert("您选择的是:"+ time);
		var dt=new Date(selectyear,selectmonth-1, id);
        var week = dt.getDay();
		var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
		$(".showdate").text("您选择的日期是: "+time+", "+weekDay[week]);
		
      })
    }
    

  });


//判断每个月多少天，显示和隐藏不需要的号
function showhideday(year,month){

    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
        $("#day29").show();
        $("#day30").show();
        $("#day31").show();
    }
  //将只有30天的月份的31号隐藏
        if(month==4||month==6||month==9||month==11){
          $("#day29").show();
          $("#day30").show();
          $("#day31").hide();
        }
          

        //如果是二月，需要判断是否是闰年
        if(month==2){
            //如果是闰年
            if((year%100!=0 &&year%4==0)||year%100==0&&year%400==0){
              $("#day29").show();
              $("#day30").hide();
              $("#day31").hide();
            }
            else{
              $("#day29").hide();
              $("#day30").hide();
              $("#day31").hide();
            }
        }
}
 

//判断星期六，星期天
function Judge_week(year,month){

      for(var i=1;i<=31;i++){
        var dt=new Date(year,month-1, i);
         var week = dt.getDay();
         //0或6表示周日和周六，然后改变颜色  
         if(week==0||week==6){
          $("#day"+i).css({"background":"#CD0000"});
         }
         else
          $("#day"+i).css({"background":"#cccccc"});
          
      }
    
}