$( document ).ready(function() {
   //Retrieve the template data from the HTML
  var linkVoid = 'javascript:void(0)';
  var imagesRoot = 'images/';
  var pdfRoot = 'pdf/';
  var template_row = $('#rowTemplate').html();
  var template_column = $('#column-partial').html();
  var content = {
                  'row' : [{
                              'leftCol':  [{   
                                             'width' : '7',
                                             'sectionTitle' : 'A Story as Old as Minnesota',
                                             'image' : [imagesRoot + 'churchHistory.jpg', 'photo of congregation standing in front of Immanuel Lutheran Church in 1908']
                                 },{
                                             'paragraph' : [{   'text' : "Immanuel Evangelical Lutheran Congregation of Hay Creek Township was founded in 1858 by several German families living in the Flower Valley area – 3-4 miles south of Red Wing. Gatherings were first held in the home of one of the members, with sacraments administered by visiting pastors twice a year. In 1862, a three-room building was built and a resident pastor – Pastor J. Horst – accepted the congregation's call."
                                                           },{  'text' : "Despite the Civil War threatening to dissolve the Immanuel congregation, it remained strong. In 1866, they received a donation of two acres of land from a Mr. W. Plote, with the condition that a church building should be built on it. This is the same land that you'll find our beautiful church on today."
                                                           }],
                                             'pdfLink' : [pdfRoot + 'History.pdf', 'View full history', 'about Immanuel Lutheran Church (opens in new tab or downloads depending on your settings)'],
                                             'externalLink' : ['https://immanuelhaycreekphotos.shutterfly.com/pictures/211', 'Church & property photos', 'View Shutterfly photo album in new tab']
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle' : 'Explore',
                                              'sideNavGroup' : [{ 'linkText'   : 'Pastor',
                                                                  'linkPath'   : 'pastor.html'
                                                              },{ 'linkText'   : 'Congregation',
                                                                  'linkPath'   : 'congregation.html'
                                                              },{ 'linkText'   : 'History',
                                                                  'linkPath'   : 'history.html',
                                                                  'linkActive' : 'active'
                                                              },{ 'linkText'   : 'Our Beliefs',
                                                                  'linkPath'   : 'beliefs.html'
                                                              },{ 'linkText'   : 'Doctrine',
                                                                  'linkPath'   : 'doctrine.html'
                                               }]
                              }]
                      }]
             };
  
  var templateScript = Handlebars.compile(template_row);
  
  Handlebars.registerPartial('column', template_column);

  var html = templateScript(content);
  
  $('#main').append(html);
  
});