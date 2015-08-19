var pageText = $('body').html();

console.log(pageText.toString());

pageText = pageText.toString().replace(/\ design/g, '<span class="hide"> design</span>');


pageText = pageText.toString().replace(/\ Design/g, '<span class="hide"> Design</span>');

pageText = pageText.toString().replace(/\ ESIGN/g, '<span class="hide"> ESIGN</span>');


pageText = pageText.toString().replace(/\ Graphic/g, '<span class="hide"> Graphic</span>');

pageText = pageText.toString().replace(/\Graphic/g, '<span class="hide">Graphic</span>');

pageText = pageText.toString().replace(/Graphic/g, '<span class="hide">Graphic</span>');


pageText = pageText.toString().replace(/\ Graphic Design/g, '<span class="hide"> Graphic Design</span>');


pageText = pageText.toString().replace(/\ graphic/g, '<span class="hide"> graphic</span>');



pageText = pageText.toString().replace(/graphic/g, '<span class="hide">graphic</span>');

pageText = pageText.toString().replace(/\ Graphic/g, '<span class="hide">Graphic</span>');

pageText = pageText.toString().replace(/\ art/g, '<span class="hide"> art</span>');

pageText = pageText.toString().replace(/graphic/g, '<span class="hide">graphic</span>');

pageText = pageText.toString().replace(/\graphicdesign/g, 
'<span class="hide">graphicdesign</span>');



pageText = pageText.toString().replace(/\ Art/g, '<span class="hide"> art</span>');


pageText = pageText.toString().replace(/\Art/g, '<span class="hide"> Art</span>');

pageText = pageText.toString().replace(/Art /g, '<span class="hide">Art </span>');

pageText = pageText.toString().replace(/ART /g, '<span class="hide">ART </span>');

pageText = pageText.toString().replace(/\ ART /g, '<span class="hide"> ART </span>');

pageText = pageText.toString().replace(/art/g, '<span class="hide">art</span>');

pageText = pageText.toString().replace(/\ Designer/g, '<span class="hide">Designer</span>');

pageText = pageText.toString().replace(/ Designers/g, '<span class="hide"> Designers</span>');

pageText = pageText.toString().replace(/graphic/g, '<span class="hide">graphic</span>');

pageText = pageText.toString().replace(/Graphic_design/g, '<span class="hide">Graphic_design</span>');


$('body').html(pageText);
