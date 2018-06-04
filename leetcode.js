$('.pick-one-btn a').attr('href', '#');
$('.pick-one-btn').on('click', function(){
  var questions = getQuestions(),
      questionLink = questions[_.random(0, questions.length)],
      url = location.origin + questionLink;
  window.open(url);
});

function getQuestions(){
  var questions = [];
  _.each($('.reactable-data tr a'), function(e){
    var href = $(e).attr('href');
    if (_.startsWith(href, '/problems/'))
      questions.push(href);
  });
  return questions;
}

