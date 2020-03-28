$( document ).ready(function() {
   //Retrieve the template data from the HTML
  var linkVoid = 'javascript:void(0)';
  var imagesRoot = 'images/';
  var template_row = $('#rowTemplate').html();
  var template_column = $('#column-partial').html();
  var content = {
                  'row' : [{
                              'leftCol': [{   'width' : '7',
                                              'sectionTitle' : 'Who We Are',
                                              'paragraph' : [{  'text' : 'We are a confessional congregation of The Lutheran Church – Missouri Synod (LCMS). United in what we believe, teach, and confess, we gather around God’s Word, the Bible, and the Holy Sacraments, in order that we would know Christ and make Him known to the world!'}],
                                              'buttonLink' : ['beliefs.html', 'Learn more', 'about our beliefs']
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'image' : [imagesRoot + 'church.jpg', 'photo of Immanuel Lutheran Church']
                                          }]
                         },{
                              'leftCol':  [{  'width' : '4 order-12 order-lg-1',
                                              'image' : [imagesRoot + 'pastorEdited.jpg', 'pastor family portrait']
                                          }],
                              'rightCol': [{  'width' : '7 order-1 order-lg-12 offset-lg-1',
                                              'sectionTitle' : 'Our Pastor',
                                              'paragraph' : [{  'text' : "Pastor Lowell Sorenson, a Minnesota native, has served as Immanuel Lutheran Church's pastor since 2004. A graduate of Concordia University, Concordia Theological Seminary, and The University of Dubuque, Pastor Sorenson lives with his wife Sara, daughters Chloe and Leah, dachshund Addie, Pomeranian Sunny, and cats Malcolm and Kit Kat. "
                                                            }],
                                              'buttonLink' : ['pastor.html', 'Learn More', 'about our pastor']
                                          }]
                        }]
                  };
  
  var templateScript = Handlebars.compile(template_row);
  
  Handlebars.registerPartial('column', template_column);

  var html = templateScript(content);
  
  $('#main').append(html);
  
});