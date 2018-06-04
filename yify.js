var Filter = (function(){
  var pub = {},
      pvt = {};

  pub.init = function(){
    $('.img-item').each(function(){
      var $this = $(this);
      if (pvt.is720p($this))
        $this.hide();
      if (pvt.lowRating($this))
        $this.css('opacity', .5);
    });
  };

  pvt.lowRating = function($item){
    var $stars = $item.find('.stars-in'),
      starsClass = $stars.attr('class'),
      stars = starsClass.substr(starsClass.length - 1);
    return _.inRange(stars, 1, 7);
  };

  pvt.is720p = function($item){
    var $quality = $item.find('.quality-thumb');
    return _.includes($quality.attr('src'), '720');
  };

  return pub;
})();


setTimeout(Filter.init, 1000);
