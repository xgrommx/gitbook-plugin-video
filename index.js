// Based on my fiddle http://jsfiddle.net/xgrommx/577pn/5
function getEmbeddedPlayer(url, height, width){
    height = height || '100%';
    width = width || '100%';

    var output = '';
    var youtubeUrl = url.match(/watch\?v=([a-zA-Z0-9\-_]+)/);
    var vimeoUrl = url.match(/^https?:\/\/(www\.)?vimeo\.com\/(clip\:)?(\d+).*$/);

    var style = "border: none;position: absolute;top: 0;left: 0;width: " + width + ";height: " + height;

    if( youtubeUrl ){
        output = '<iframe style="' + style + '" src="https://www.youtube.com/embed/'+youtubeUrl[1]+'?rel=0" frameborder="0" allowfullscreen>';
    }else if(vimeoUrl){
        output =  '<iframe style="' + style + '" src="https://player.vimeo.com/video/'+vimeoUrl[3]+'" frameborder="0"></iframe>';
    }else{
        output = '<p>No video url found - vimeo and youtube supported</p>';
    }
    return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">' + output + '</div>';
}

module.exports = {
    blocks: {
        video: {
            process: function(block) {
                return getEmbeddedPlayer(block.body);
            }
        }
    }
};
