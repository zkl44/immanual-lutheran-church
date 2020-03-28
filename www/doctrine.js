$( document ).ready(function() {
   //Retrieve the template data from the HTML
  var linkVoid = 'javascript:void(0)';
  var imagesRoot = 'images/';
  var pdfRoot = 'pdf/';
  var template_row = $('#rowTemplate').html();
  var template_column = $('#column-partial').html();
  var content = {
                  'row' : [{
                              'leftCol':  [{ 'width' : '7',
                                              'sectionTitle' : 'Doctrinal Position of the Missouri Synod',
                                              'paragraph' : [{  'text' : 'What does being Lutheran mean? The “What About?” series by former Synod President Rev. Dr. A.L. Barry addresses doctrinal topics, moral issues, and concerns in the church to help Christians grow in their understanding of these important questions.'}],
                                              'externalLink' : ['https://www.lcms.org/about/beliefs', 'Learn More', 'about the doctrinal position of the Missouri Synod on the Lutheran Church - Missouri Synod website'],
                                          }],
                                          
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle' : 'Explore',
                                              'sideNavGroup' : [{ 'linkText'   : 'Pastor',
                                                                  'linkPath'   : 'pastor.html'
                                                              },{ 'linkText'   : 'Congregation',
                                                                  'linkPath'   : 'congregation.html'
                                                              },{ 'linkText'   : 'History',
                                                                  'linkPath'   : 'history.html'
                                                              },{ 'linkText'   : 'Our Beliefs',
                                                                  'linkPath'   : 'beliefs.html'
                                                              },{ 'linkText'   : 'Doctrine',
                                                                  'linkPath'   : 'doctrine.html',
                                                                  'linkActive' : 'active'
                                               }]
                              }]
                      }]
             };
  
  var templateScript = Handlebars.compile(template_row);
  
  Handlebars.registerPartial('column', template_column);

  var html = templateScript(content);
  
  $('#main').append(html);
  
});