setTimeout(function(){
    let Questions = getQuestions();
    let random = setInterval(function(){
        var questionLink = Questions[_.random(0, Questions.length)],
            url = location.origin + questionLink;
      $('.pick-one-btn a').attr('href', url);
    }, 1000);
}, 200);

function getQuestions(){
  var questions = [];
  _.each($('.reactable-data tr a'), function(e){
    var href = $(e).attr('href');
    if (_.startsWith(href, '/problems/'))
      questions.push(href);
  });
  return questions;
}
