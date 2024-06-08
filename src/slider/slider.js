import "./slider.css"
 
export default class Slider {

    radioCheck = function() {
        let checkedId;
        document.querySelectorAll(".radio_button").forEach((elm,j)  => {
            if(elm.checked) {
                elm.removeAttribute("checked");
                checkedId = Number(j + 1);
            }
            
        });
        return checkedId;
    }
    
    leftFnc = function(first) {
        let checkedId = radioCheck();
        if(checkedId == first) {
            document.querySelector(`#r${checkedId}`).setAttribute("checked","checked");
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "black";
        } else {
            document.querySelector(`#r${checkedId - 1}`).setAttribute("checked","checked");
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "white";
            document.querySelector(`.labelr${checkedId - 1}`).style.backgroundColor = "black"
        }
    }

    rightFnc = function(last) {
        let checkedId = radioCheck();
        if(checkedId == last) {
            document.querySelector(`#r${checkedId}`).setAttribute("checked","checked");
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "black";
        } else {
            document.querySelector(`#r${checkedId + 1}`).setAttribute("checked","checked");
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "white";
            document.querySelector(`.labelr${checkedId + 1}`).style.backgroundColor = "black";
        }
    }

}