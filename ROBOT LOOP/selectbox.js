function _find_now_record_id()
{
    if (document.getElementById("record1").on == 1)
        return "record1"
    else if (document.getElementById("record2").on == 1)
        return "record2"
    else if (document.getElementById("record3").on == 1)
        return "record3"
    else if (document.getElementById("record4").on == 1)
        return "record4"
    else
        return null;
}

function record(id)
{
    if (id == 1)
        record_id = "record1"
    else if (id == 2)
        record_id = "record2"   
    else if (id == 3)
        record_id = "record3"  
    else if (id == 4)
        record_id = "record4"   


    if ( document.getElementById(record_id).on != 1)
    {
        // Other Record OFF
        document.getElementById("record1").on = 0;
        document.getElementById("record2").on = 0;
        document.getElementById("record3").on = 0;
        document.getElementById("record4").on = 0;
        document.getElementById("record1").innerHTML = "REC ON"
        document.getElementById("record2").innerHTML = "REC ON"
        document.getElementById("record3").innerHTML = "REC ON"
        document.getElementById("record4").innerHTML = "REC ON"

        // Record ON
        document.getElementById(record_id).on = 1;
        console.log(record_id+" RECORD "+document.getElementById(record_id).on);
        document.getElementById(record_id).innerHTML = "REC OFF"
    }
    else 
    {    // Record OFF
        document.getElementById(record_id).on = 0;
        console.log(record_id+" RECORD "+document.getElementById(record_id).on);
        document.getElementById(record_id).innerHTML = "REC ON"
    }

}

function select(box_id)
{
    _select_box[0] = false;
    _select_box[1] = false;
    _select_box[2] = false;
    _select_box[3] = false;

    if ( box_id == 0 ){
        BOX_ID = "left_up"
        _select_box[0] = true;
    }
        
    if ( box_id == 1 ){
        BOX_ID = "left_down"
        _select_box[1] = true;
    }
        
    if ( box_id == 2 ){
        BOX_ID = "right_up"
        _select_box[2] = true;
    }
    
    if ( box_id == 3 ){
        BOX_ID = "right_down"
        _select_box[3] = true;
    }

    document.getElementById("left_up").style.border = "2.5pt solid #000000";
    document.getElementById("left_down").style.border = "2.5pt solid #000000";
    document.getElementById("right_up").style.border = "2.5pt solid #000000";
    document.getElementById("right_down").style.border = "2.5pt solid #000000";

    document.getElementById(BOX_ID).style.border = "2.5pt solid #CF0000";

}
