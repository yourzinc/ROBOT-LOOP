// press the key

    _data_1 = new Array();
    _data_sound_1 = new Audio();
    _data_background_1 = new Array();

    _data_2 = new Array();
    _data_sound_2 = new Audio();
    _data_background_2 = new Array();

    _data_3 = new Array();
    _data_sound_3 = new Audio();
    _data_background_3 = new Array();

    _data_4 = new Array();
    _data_sound_4 = new Audio();
    _data_background_4 = new Array();

    _select_box = [false, false, false, false]

   // controller - delete
   function press_delete_1()
   {
        document.getElementById("left_up").style.background = "#ffffff";
        document.getElementById("box1").style.background = "";
        document.getElementById("box2").style.background = "";
        document.getElementById("box3").style.background = "";
        document.getElementById("box4").style.background = "";

        document.getElementById("play1").innerHTML = "START"
        document.getElementById("play1").play = 0;
        
        _data_1 = [];
        _data_sound_1 = [];
        _data_background_1 = [];

        audio1 = new Audio;
        playlist1 = new Array;
   }

   function press_delete_2()
   {
        document.getElementById("left_down").style.background = "#ffffff";
        document.getElementById("box11").style.background = "";
        document.getElementById("box22").style.background = "";
        document.getElementById("box33").style.background = "";
        document.getElementById("box44").style.background = "";

        document.getElementById("play2").innerHTML = "START"
        document.getElementById("play2").play = 0;
        
        _data_2 = [];
        _data_sound_2 = [];
        _data_background_2 = [];

        audio2 = new Audio;
        playlist2 = new Array;
   }

   function press_delete_3()
   {
        document.getElementById("right_up").style.background = "#ffffff";
        document.getElementById("box111").style.background = "";
        document.getElementById("box222").style.background = "";
        document.getElementById("box333").style.background = "";
        document.getElementById("box444").style.background = "";

        document.getElementById("play3").innerHTML = "START"
        document.getElementById("play3").play = 0;
        
        _data_3 = [];
        _data_sound_3 = [];
        _data_background_3 = [];

        audio3 = new Audio;
        playlist3 = new Array;
   }
 
   function press_delete_4()
   {
        document.getElementById("right_down").style.background = "#ffffff";
        document.getElementById("box1111").style.background = "";
        document.getElementById("box2222").style.background = "";
        document.getElementById("box3333").style.background = "";
        document.getElementById("box4444").style.background = "";

        document.getElementById("play4").innerHTML = "START"
        document.getElementById("play4").play = 0;
        
        _data_4 = [];
        _data_sound_4 = [];
        _data_background_4 = [];

        audio4 = new Audio;
        playlist4 = new Array;
   }

    // controller - play
    var audio1 = new Audio;
    var playlist1 = new Array;

    function press_play_1()
    {

        if ( document.getElementById("play1").play == 1 )
        {
            document.getElementById("play1").play = -1
            document.getElementById("play1").innerHTML = "PLAY"
            audio1.pause();
            audio1.currentTime = 0;
        }
        else if ( document.getElementById("play1").play == -1 )
        {
            document.getElementById("play1").play = 1
            document.getElementById("play1").innerHTML = "STOP"
            audio1.play();
        }
        else    // initialize �ʱ�ȭ
        {
            document.getElementById("play1").play = 1;

            document.getElementById("play1").innerHTML = "STOP"

            if ( _data_1 != 0) {
                // make playlist
                for ( i=0 ; i<4; i++ ) {
                    d2 = _data_1.shift()
                    playlist1.push(Drum_sound[d2]);
                    _data_background_1.push(d2);
                }
                
                //i = 0;
                // play the playlist
                audio1.addEventListener('ended', function () {
                    i = ++i < playlist1.length ? i : 0;
                    audio1.src = playlist1[i];
                    document.getElementById("left_up").style.backgroundColor 
                    = _background_color_1[_data_background_1[i]];
                    audio1.play();
                }, true);

                audio1.loop = false;
                audio1.src = playlist1[0];
                audio1.play();
            }
        }
    }

    var audio2 = new Audio;
    var playlist2 = new Array;

    function press_play_2()
    {
        if ( document.getElementById("play2").play == 1 )
        {
            document.getElementById("play2").play = -1
            document.getElementById("play2").innerHTML = "PLAY"
            audio2.pause();
            audio2.currentTime = 0;
        }
        else if ( document.getElementById("play2").play == -1 )
        {
            document.getElementById("play2").play = 1
            document.getElementById("play2").innerHTML = "STOP"
            audio2.play();
        }
        else
        {
            document.getElementById("play2").play = 1;

            document.getElementById("play2").innerHTML = "STOP"

            if ( _data_2 != 0) {
                // make playlist
                for ( i=0 ; i<4; i++ ) {
                    d3 = _data_2.shift()
                    playlist2.push(Drum_sound[d3]);
                    _data_background_2.push(d3);
                }
                
                //j = 0;
                // play the playlist
                audio2.addEventListener('ended', function () {
                    i = ++i < playlist2.length ? i : 0;
                    audio2.src = playlist2[i];
                    document.getElementById("left_down").style.backgroundColor 
                    = _background_color_2[_data_background_2[i]];
                    audio2.play();
                }, true);

                audio2.loop = false;
                audio2.src = playlist2[0];
                audio2.play();
            }
        }
    }

    
    var audio3 = new Audio;
    var playlist3 = new Array;

    function press_play_3()
    {
        if ( document.getElementById("play3").play == 1 )
        {
            document.getElementById("play3").play = -1
            document.getElementById("play3").innerHTML = "PLAY"
            audio3.pause();
            audio3.currentTime = 0;
        }
        else if ( document.getElementById("play3").play == -1 )
        {
            document.getElementById("play3").play = 1
            document.getElementById("play3").innerHTML = "STOP"
            audio3.play();
        }
        else
        {
            document.getElementById("play3").play = 1;

            document.getElementById("play3").innerHTML = "STOP"

            if ( _data_3 != 0) {
                // make playlist
                for ( i=0 ; i<4; i++ ) {
                    d4 = _data_3.shift()
                    playlist3.push(Robot_sound[d4]);
                    _data_background_3.push(d4);
                }
                
                // play the playlist
                audio3.addEventListener('ended', function () {
                    i = ++i < playlist3.length ? i : 0;
                    audio3.src = playlist3[i];
                    document.getElementById("right_up").style.backgroundColor 
                    = _background_color_3[_data_background_3[i]];
                    audio3.play();
                }, true);

                audio3.loop = false;
                audio3.src = playlist3[0];
                audio3.play();
            }
        }
    }

    
    var audio4 = new Audio;
    var playlist4 = new Array;

    function press_play_4()
    {
        if ( document.getElementById("play4").play == 1 )
        {
            document.getElementById("play4").play = -1
            document.getElementById("play4").innerHTML = "PLAY"
            audio4.pause();
            audio4.currentTime = 0;
        }
        else if ( document.getElementById("play4").play == -1 )
        {
            document.getElementById("play4").play = 1
            document.getElementById("play4").innerHTML = "STOP"
            audio4.play();
        }
        else
        {
            document.getElementById("play4").play = 1;

            document.getElementById("play4").innerHTML = "STOP"

            if ( _data_4 != 0) {
                // make playlist
                for ( i=0 ; i<4; i++ ) {
                    d5 = _data_4.shift()
                    playlist4.push(Robot_sound[d5]);
                    _data_background_4.push(d5);
                }
                
                // play the playlist
                audio4.addEventListener('ended', function () {
                    i = ++i < playlist4.length ? i : 0;
                    audio4.src = playlist4[i];
                    document.getElementById("right_down").style.backgroundColor 
                    = _background_color_4[_data_background_4[i]];
                    audio4.play();
                }, true);

                audio4.loop = false;
                audio4.src = playlist4[0];
                audio4.play();
            }
        }
    }

    // KEY PRESS
    document.addEventListener('keydown', function(event) {
        _if_now_record_on();
        play_sound();

        function press_key(i)
        {
            if (_select_box[0]){
                Drum_key[i].sound.play();
                document.getElementById("left_up").style.backgroundColor = _background_color_1[i];
            }
            else if (_select_box[1]){
                Drum_key2[i].sound.play();
                document.getElementById("left_down").style.backgroundColor = _background_color_2[i];
            }
            else if (_select_box[2]){
                Robot_key[i].sound.play();
                document.getElementById("right_up").style.backgroundColor = _background_color_3[i];
            }
            else if (_select_box[3]){
                Robot_key2[i].sound.play();
                document.getElementById("right_down").style.backgroundColor = _background_color_4[i];
            }
        }

        
        function _save_data_drum(id, data_array, background_array)
        {
            if (data_array.length < 4) {
                
                if (id == 1){
                    data_array.push(Drum_key.findIndex(i=>i.key == event.keyCode))
                    background_array.push(Drum_key.findIndex(i=>i.key == event.keyCode))

                    if (data_array.length == 1) document.getElementById("box1").style.background =  _background_color_1[background_array.shift()];
                    else if (data_array.length == 2) document.getElementById("box2").style.background =  _background_color_1[background_array.shift()];
                    else if (data_array.length == 3) document.getElementById("box3").style.background =  _background_color_1[background_array.shift()];
                    else if (data_array.length == 4) document.getElementById("box4").style.background =  _background_color_1[background_array.shift()];
                }
                if (id == 2){
                    data_array.push(Drum_key2.findIndex(i=>i.key == event.keyCode))
                    background_array.push(Drum_key2.findIndex(i=>i.key == event.keyCode))

                    if (data_array.length == 1) document.getElementById("box11").style.background =  _background_color_2[background_array.shift()];
                    else if (data_array.length == 2) document.getElementById("box22").style.background =  _background_color_2[background_array.shift()];
                    else if (data_array.length == 3) document.getElementById("box33").style.background =  _background_color_2[background_array.shift()];
                    else if (data_array.length == 4) document.getElementById("box44").style.background =  _background_color_2[background_array.shift()];
                }
            }
            if (data_array.length == 4) record(id);
            
            play_sound();
        }

        function _save_data_robot(id, data_array, background_array)
        {
            if (data_array.length < 4) {
                
                if (id == 3){
                    data_array.push(Robot_key.findIndex(i=>i.key == event.keyCode))
                    background_array.push(Robot_key.findIndex(i=>i.key == event.keyCode))

                    if (data_array.length == 1) document.getElementById("box111").style.background =  _background_color_3[background_array.shift()];
                    else if (data_array.length == 2) document.getElementById("box222").style.background =  _background_color_3[background_array.shift()];
                    else if (data_array.length == 3) document.getElementById("box333").style.background =  _background_color_3[background_array.shift()];
                    else if (data_array.length == 4) document.getElementById("box444").style.background =  _background_color_3[background_array.shift()];
                }
                if (id == 4){
                    data_array.push(Robot_key2.findIndex(i=>i.key == event.keyCode))
                    background_array.push(Robot_key2.findIndex(i=>i.key == event.keyCode))

                    if (data_array.length == 1) document.getElementById("box1111").style.background =  _background_color_4[background_array.shift()];
                    else if (data_array.length == 2) document.getElementById("box2222").style.background =  _background_color_4[background_array.shift()];
                    else if (data_array.length == 3) document.getElementById("box3333").style.background =  _background_color_4[background_array.shift()];
                    else if (data_array.length == 4) document.getElementById("box4444").style.background =  _background_color_4[background_array.shift()];
                }
            }
            if (data_array.length == 4) record(id);
            
            play_sound();           
        }
        
        function _if_now_record_on()
        {
            // ���ڵ� ��ư�� ������ ������
            now_record_id = _find_now_record_id();
            console.log("NOW RECORD ID IS "+now_record_id);
            
            if (now_record_id == null)
                return;
            
            if (now_record_id ==  "record1")
            {
                // 4���� key ���� ���� &  background �ٲ��ֱ�
                _save_data_drum(1, _data_1, _data_background_1);
            }
                
            else if (now_record_id ==  "record2")
            {
                // 4���� key ���� ���� &  background �ٲ��ֱ�                
                _save_data_drum(2, _data_2, _data_background_2);
                // ���ڵ� ��ư ������
            }
            else if (now_record_id ==  "record3")
            {
                // 4���� key ���� ���� &  background �ٲ��ֱ�                
                _save_data_robot(3, _data_3, _data_background_3);
                // ���ڵ� ��ư ������
            }
            else if (now_record_id ==  "record4")
            {
                // 4���� key ���� ���� &  background �ٲ��ֱ�                
                _save_data_robot(4, _data_4, _data_background_4);
            }

        };

        function play_sound()
        {
            if(event.keyCode  == 81) {
                press_key(0);
                return "Q"
            }
            if(event.keyCode == 87) {
                press_key(1);
                return "W"
            }
            if(event.keyCode == 69) {
                press_key(2);
                return "E"
            }
            if(event.keyCode == 82) {
                press_key(3);
                return "R"
            }
            if(event.keyCode == 84) {
                press_key(4);
                return "T"
            }
            if(event.keyCode == 89) {
                press_key(5);
                return "Y"
            }
            if(event.keyCode == 85) {
                press_key(6);
                return "U"
            }
            if(event.keyCode == 73) {
                press_key(7);
                return "I"
            }
            if(event.keyCode == 79) {
                press_key(8);
                return "O"
            }
            if(event.keyCode == 80) {
                press_key(9);
                return "P"
            }
        }
    })
