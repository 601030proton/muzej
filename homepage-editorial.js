/* Reader-triggered playback: no remote player is loaded before a click. */
(function(){
  var play=document.getElementById('play-film');
  if(play)play.addEventListener('click',function(){
    var frame=document.createElement('iframe');
    frame.title='Rhythm and Sound (1955), directed by Trajče Popov';
    frame.src='https://www.youtube-nocookie.com/embed/zLmtG7q3k8s?autoplay=1&rel=0&playsinline=1';
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen=true;
    frame.referrerPolicy='strict-origin-when-cross-origin';
    var screen=document.getElementById('film-screen');screen.replaceChildren(frame);frame.focus();
    document.getElementById('film-status').textContent='If playback is unavailable, open the film on YouTube.';
  });
  var archive=document.querySelector('.home-archive details');
  document.querySelectorAll('a[href="#archive"]').forEach(function(link){link.addEventListener('click',function(){if(archive)archive.open=true;});});
  if(location.hash==='#archive'&&archive)archive.open=true;
  var input=document.getElementById('archive-search');
  if(input){var items=Array.from(document.querySelectorAll('.archive-list li'));input.addEventListener('input',function(){var query=input.value.trim().toLocaleLowerCase();var visible=0;items.forEach(function(item){item.hidden=!item.textContent.toLocaleLowerCase().includes(query);if(!item.hidden)visible++;});document.getElementById('archive-results').textContent=query?(visible?visible+(visible===1?' story found':' stories found'):'No stories found. Try a different name or place.'):'';});}
})();
