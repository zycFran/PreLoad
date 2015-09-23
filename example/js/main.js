/**
 * Created by zhouyc on 2015/9/10.
 */

var loadData = [
    {name: 'img1', path: 'image/bg.jpg'},
    {name: 'img2', path: 'image/p1.jpg'},
    {name: 'img3', path: 'image/p1_3_03.png'},
    {name: 'img4', path: 'image/p1_3_06.png'},
    {name: 'img5', path: 'image/p1_3_11.png'},
    {name: 'img6', path: 'image/p2_03.png'},
    {name: 'img7', path: 'image/p2_t_03.png'},
    {name: 'img8', path: 'image/p2_t_07.png'},
    {name: 'img9', path: 'image/p4-cloud_02.png'},
    {name: 'img10', path: 'image/p4_03.png'},
    {name: 'img11', path: 'image/p4_3_03.png'},
    {name: 'img12', path: 'image/p4_3_07.png'},
    {name: 'img13', path: 'image/p4_3_09.png'},
    {name: 'img14', path: 'image/p4_4_03.png'},
    {name: 'img15', path: 'image/p4_07.png'},
    {name: 'img16', path: 'image/p4_11.png'},
    {name: 'img17', path: 'image/p5.jpg'},
    {name: 'img18', path: 'image/p5_03.png'},

    {type: 'sound', path: 'audio/bg.mp3'}
];
PreLoad.load(
    loadData,
    function (progress) {
        $("#progressText").text(Math.min(progress, 100) + "%");
    },
    function (result) {
        $(".preload").hide();
        $(".main-content").show();
    }
);
