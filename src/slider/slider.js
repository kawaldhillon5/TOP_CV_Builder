import "./slider.css"
 
export default class Slider {

    radioCheck = function(value) {
        return (value) ? Number(document.querySelector(".workInfoForm").id) : Number(document.querySelector(".educationInfoForm").id);
    }
    
    leftFnc = function(first, value) {
        let checkedId = this.radioCheck(value);
        if(checkedId == first) {
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "black";
            return checkedId
        } else {
            document.querySelector(`.labelr${checkedId}`).style.backgroundColor = "white";
            document.querySelector(`.labelr${checkedId - 1}`).style.backgroundColor = "black"
            return checkedId-1;
        }
    }

    rightFnc = function(last, value) {
        let checkedId = this.radioCheck(value);
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