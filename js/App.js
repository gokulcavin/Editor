$(document).ready(function() {
    $('div.editor-activate').on('click',function(){
        $(this).addClass('active');
    })
    $('.hrzl,.txbx,.tabl').draggable({
        revert:"invalid",
        helper:"clone"
    });
    $('.editor-activate').droppable({  
        drop: function (e, div) {
            var draggable = div.draggable;
            var _id=$(draggable).attr('id');
            switch(_id){
                case 'hrozline':
                    $('.editor-activate').append('<div class="draggable hr-line"><div class="hr-line-close"><button onclick="hrDeleBtn(this)"><i class="mdi mdi-delete"></i></button><button onclick="openHrToBx(this)"><i class="mdi mdi-pencil"></i></button></div><div class="hrstyle-line hr-style1"></div><div class="hrozintal-line-style"><a onclick="closeHrToBx(this)" class="hr-drop-box-cls"><i class="mdi mdi-close"></i></a><div class="hrozintal-divne-style"><div class="hr-lin-width"><span>Width</span><input type="range" min="0" max="100" onChange=hrLinezsi(this,"width")></div><div class="hr-lin-sty-sel"><span>Select Line Style</span></div><div class="hr-sty-option"><div class="hr-style1"></div><div class="hr-style2"></div><div class="hr-style3"></div><div class="hr-style4"></div><div class="hr-style5"></div><div class="hr-style6"></div><div class="hr-style7"></div><div class="hr-style8"></div><div class="hr-style9"></div><div class="hr-style10"></div><div class="hr-style11"></div><div class="hr-style12"></div><div class="hr-style13"></div><div class="hr-style14"></div><div class="hr-style15"></div><div class="hr-style16"></div><div class="hr-style17"></div><div class="hr-style18"></div></div></div></div></div>');
                    break;
                case 'textb':
                    $('.editor-activate').append("<div class='label-des-txtbx draggable'> <div class='label-des-tbxcls'> <button onclick='txtDeleBtn(this)'><i class='mdi mdi-delete'></i></button> <button onclick='openToolBx(this)'><i class='mdi mdi-pencil'></i></button> </div><textarea class='editable' autofocus=1>Edit Me</textarea> <div class='labeledit-tolbx'> <div class='edit-tool-top'> <button onClick='btnBold(this)'><i class='mdi mdi-format-bold'></i></button> <button onClick='btnUnd(this)'><i class='mdi mdi-format-underline'></i></button> <button onClick='btnItalc(this)'><i class='mdi mdi-format-italic'></i></button> <button onClick='btnTexLef(this)'><i class='mdi mdi-format-align-left'></i></button> <button onClick='btnTexRig(this)'><i class='mdi mdi-format-align-right'></i></button> <button onClick='btnTexCen(this)'><i class='mdi mdi-format-align-center'></i></button> <button onClick='btnTexJus(this)'><i class='mdi mdi-format-align-justify'></i></button> <i class='mdi mdi-format-text'></i> <select onChange=fontFamVal(this,'font-family')> <option value='Arial, Helvetica, sans-serif'>Arial</option> <option value='Courier New, Courier, monospace'>Courier</option> <option value='Georgia, Times New Roman, serif'>Georgia</option> <option value='Helvetica Neue, Arial, Helvetica, sans-serif'>Helvetica</option> <option value='Times, Times New Roman, serif'>Times</option> <option value='Trebuchet MS, sans-serif'>Trebuchet</option> <option value='Verdana, sans-serif'>Verdana</option> </select> </div><div class='edit-tool-bottom'> <i class='mdi mdi-format-size'></i> <select onChange=fontFamVal(this,'font-size')><option value=5>5<option value=6>6<option value=7>7<option value=8>8<option value=9>9<option value=10>10<option value=11>11<option value=12>12<option value=13>13<option value=14>14<option value=15>15<option value=16>16<option value=17>17<option value=18>18<option value=19>19<option value=20>20<option value=21>21<option value=22>22<option value=23>23<option value=24>24<option value=25>25<option value=26>26<option value=27>27<option value=28>29<option value=29>29<option value=30>30<option value=31>31<option value=32>32<option value=33>33<option value=34>34<option value=35>35<option value=36>36<option value=37>37<option value=38>38<option value=39>39<option value=40>40<option value=41>41<option value=42>42<option value=43>43<option value=44>44<option value=45>4<option value=46>46<option value=47>47<option value=48>48<option value=49>49<option value=50>50<option value=51>52<option value=52>52<option value=53>53<option value=54>54<option value=55>55<option value=56>56<option value=57>57<option value=58>58<option value=59>59<option value=60>60<option value=61>61<option value=62>63<option value=63>63<option value=64>64<option value=65>65<option value=66>66<option value=67>67<option value=68>68<option value=69>69<option value=70>70<option value=71>71<option value=72>72<option value=73>73<option value=74>74<option value=75>75<option value=76>76<option value=77>77<option value=78>78<option value=79>79<option value=80>80<option value=81>81<option value=82>82<option value=83>83<option value=84>84<option value=85>85<option value=86>86<option value=87>87<option value=88>88<option value=89>89<option value=90>90<option value=91>91<option value=92>93<option value=93>93<option value=94>94<option value=95>95<option value=96>96<option value=97>97<option value=98>98<option value=99>99<option value=100>100</option></select><i class='mdi mdi-format-color-text'></i> <input type='color' onChange=fontFamVal(this,'color') list='' value='#FF0000'> <div class='labtxt-width'><span>Width</span> <input type='range' min='0' max='100' onChange=txtWidthSiz(this,'width')></div><button onclick='closeToolBx(this)' class='editxt-cls-btn'><i class='mdi mdi-close'></i></button> </div></div></div>");
                    break;
                case 'tabldes':
                    $('.editor-activate').append('<div class="desi-tabl draggable"><div class="tabl-close"><button onclick="tabDeleBtn(this)"><i class="mdi mdi-delete"></i></button><button onclick="openTblBx(this)"><i class="mdi mdi-pencil"></i></button></div><div class="table-edit-bx"><span>Width</span><input type="range" min="0" max="100" onChange=deTblSiz(this,"width")><div class="tbl-stl-btn"><button class="deTabStOn">Style 1</button><button class="deTabStTw">Style 2</button><button class="deTabStTh">Style 3</button><button class="deTabStFo">Style 4</button></div><button onClick="tabTolClose(this)" class="tbl-set-cls"><i class="mdi mdi-close"></i></button></div><table class="desi-fro-tbl"><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr><tr><td>Data One</td><td>Data Two</td><td>Data Three</td><td>Data Four</td></tr><tr><td>Data One</td><td>Data Two</td><td>Data Three</td><td>Data Four</td></tr><tr><td>Data One</td><td>Data Two</td><td>Data Three</td><td>Data Four</td></tr><tr><td>Data One</td><td>Data Two</td><td>Data Three</td><td>Data Four</td></tr></table></div>');
                    break;

            }
            $( ".draggable" ).draggable();
            $('.label-des-txtbx').mouseenter(function(){
                $(this).addClass('label-mov-ove');
            })
            $('.label-des-txtbx').mouseleave(function(){
                $('div.draggable').removeClass('label-mov-ove');
            })
            $('div.tbl-stl-btn button').on('click',function(){
                if($(this).hasClass('deTabStOn')){
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').removeClass('deTabStOn deTabStTw deTabStTh deTabStFo');
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').addClass('deTabStOn');
                }else if($(this).hasClass('deTabStTw')){
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').removeClass('deTabStOn deTabStTw deTabStTh deTabStFo');
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').addClass('deTabStTw');
                }
                else if($(this).hasClass('deTabStTh')){
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').removeClass('deTabStOn deTabStTw deTabStTh deTabStFo');
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').addClass('deTabStTh');
                }
                else if($(this).hasClass('deTabStFo')){
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').removeClass('deTabStOn deTabStTw deTabStTh deTabStFo');
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').addClass('deTabStFo');
                } 
                else{
                    $('.tbl-stl-btn button').parents('.desi-tabl').find('.desi-fro-tbl').removeClass('deTabStOn deTabStTw deTabStTh deTabStFo');
                }
            })

            $('div.hr-sty-option div').on('click',function(){
                if($(this).hasClass('hr-style1')){
                    $('div.hrozintal-divne-style div').parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $('div.hrozintal-divne-style div').parents('.hr-line').find('.hrstyle-line').addClass('hr-style1');
                }
                else if($(this).hasClass('hr-style2')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style2');
                }
                else if($(this).hasClass('hr-style3')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style3');
                }
                else if($(this).hasClass('hr-style4')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style4');
                }
                else if($(this).hasClass('hr-style5')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style5');
                }
                else if($(this).hasClass('hr-style6')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style6');
                }
                else if($(this).hasClass('hr-style7')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style7');
                }
                else if($(this).hasClass('hr-style8')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style8');
                }
                else if($(this).hasClass('hr-style9')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style9');
                }
                else if($(this).hasClass('hr-style8')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style8');
                }
                else if($(this).hasClass('hr-style9')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style9');
                }
                else if($(this).hasClass('hr-style10')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style10');
                }
                else if($(this).hasClass('hr-style11')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style11');
                }
                else if($(this).hasClass('hr-style12')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style12');
                }
                else if($(this).hasClass('hr-style13')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style13');
                }
                else if($(this).hasClass('hr-style14')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style14');
                }
                else if($(this).hasClass('hr-style15')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style15');
                }
                else if($(this).hasClass('hr-style16')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style16');
                }
                else if($(this).hasClass('hr-style17')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style17');
                }
                else if($(this).hasClass('hr-style18')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style18');
                }
                else if($(this).hasClass('hr-style19')){
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                    $(this).parents('.hr-line').find('.hrstyle-line').addClass('hr-style19');
                }
                else{
                    $(this).parents('.hr-line').find('.hrstyle-line').removeClass('hr-style1 hr-style2 hr-style3 hr-style4 hr-style5 hr-style6 hr-style7 hr-style8 hr-style9 hr-style10 hr-style11 hr-style12 hr-style13 hr-style14 hr-style15 hr-style16 hr-style17 hr-style18');
                }
            })
        }
    })
    $( ".draggable" ).draggable();
});

function btnBold(e){
    if( $(e).parents('.label-des-txtbx').find('.editable').css('font-weight') != 'bold' )  { 
        $(e).parents('.label-des-txtbx').find('.editable').css('font-weight','bold');
    } 
    else { 
        $(e).parents('.label-des-txtbx').find('.editable').css('font-weight','normal');
    }
}
function btnUnd(e){
    if( $(e).parents('.label-des-txtbx').find('.editable').css('text-decoration') != 'underline' )  { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-decoration','underline');
    } 
    else { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-decoration','none');
    }
}
function btnItalc(e){
    if( $(e).parents('.label-des-txtbx').find('.editable').css('font-style') != 'italic' )  { 
        $(e).parents('.label-des-txtbx').find('.editable').css('font-style','italic');
    } 
    else { 
        $(e).parents('.label-des-txtbx').find('.editable').css('font-style','normal');
    }
}
function btnTexLef(e){
    if( $(e).parents('.label-des-txtbx').find('.editable').css('text-align') != 'left' )  { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-align','left');
    } 
    else { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-align','none');
    }
}
function btnTexRig(e){
    if( $(e).parents('.label-des-txtbx').find('.editable').css('text-align') != 'right' )  { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-align','right');
    } 
    else { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-align','none');
    }
}
function btnTexCen(e){
    if( $(e).parents('.label-des-txtbx').find('.editable').css('text-align') != 'center' )  { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-align','center');
    } 
    else { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-align','none');
    }
}
function btnTexJus(e){
    if( $(e).parents('.label-des-txtbx').find('.editable').css('text-align') != 'justify' )  { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-align','justify');
    } 
    else { 
        $(e).parents('.label-des-txtbx').find('.editable').css('text-align','none');
    }
}
function fontFamVal(e,_prop){
    var val = $(e).val()
    if(_prop === "font-size") val = parseInt($(e).val())
    $(e).parents('.label-des-txtbx').find('.editable').css(_prop, val);
}
function hrLinezsi(e,_prop){
    var hrsi = $(e).val()
    $(e).parents('.hr-line').css(_prop, hrsi+ "%");
}
function deTblSiz(e,_prop){
    var hrsi = $(e).val()
    $(e).parents('.desi-tabl').find('.desi-fro-tbl').css(_prop, hrsi+ "%");
}
function txtWidthSiz(e,_prop){
    var labsx = $(e).val()
    $(e).parents('.label-des-txtbx').css(_prop, labsx+ "%");
}
function openToolBx(e){
    $(e).parents('.label-des-txtbx').find('.labeledit-tolbx').show();
}
function openTblBx(e){
    $(e).parents('.desi-tabl').find('.table-edit-bx').show();
}
function openHrToBx(e){
    $(e).parents('.hr-line').find('.hrozintal-line-style').show();
}
function closeHrToBx(e){
    $('.hrozintal-line-style').hide();
}
function tabDeleBtn(e){
    $(e).parents('.desi-tabl').remove();
}
function txtDeleBtn(e){
    $(e).parents('.label-des-txtbx').remove();
}
function hrDeleBtn(e){
    $(e).parents('.hr-line').remove();
}
function closeToolBx(e){
    $(e).parents('.label-des-txtbx').find('.labeledit-tolbx').hide();
}
function tabTolClose(e){
    $(e).parents('.desi-tabl').find('.table-edit-bx').hide();
}
