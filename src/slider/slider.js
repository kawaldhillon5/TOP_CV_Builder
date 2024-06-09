import "./slider.css"
 
export default class Slider {

    radioCheck = function() {
       return Number(document.querySelector(".workInfoForm").id);
    }
    
    leftFnc = function(first) {
        let checkedId = this.radioCheck();
        if(checkedId == first) {
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "black";
            return checkedId
        } else {
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "white";
            document.querySelector(`.labelr${checkedId - 1}`).style.backgroundColor = "black"
            return checkedId-1;
        }
    }

    rightFnc = function(last) {
        let checkedId = this.radioCheck();
        if(checkedId == last) {
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "black";
            return checkedId
        } else {
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "white";
            document.querySelector(`.labelr${checkedId + 1}`).style.backgroundColor = "black";
            return checkedId+1;
        }
    }

}