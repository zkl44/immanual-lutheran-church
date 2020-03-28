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
                                              'sectionTitle' : 'Get to Know Our Congregation',
                                              'image' : [imagesRoot + 'congregation.JPG', 'Congregation outside the church']
                                          },{  
                                              'paragraph' : [{  'text' : 'Immanuel Lutheran Church is a congregation of men, women, and children who gather to receive God’s gifts and engage in fellowship with one another. Since 1858, we have been gathering to hear God’s Word and receive His Holy Sacraments.'
                                                            },{ 'text' : 'The primary business of the church is worship. Receiving the grace of God in faith leads us to come before the Lord with thanksgiving for all His many benefits, especially the gifts of forgiveness, life, and salvation. Our building is on the National Register of Historic Places, but our teaching is as old as the foundation of faith laid down by Christ and His apostles.'
                                                            }],
                                              'externalLink' : ['https://immanuelhaycreekphotos.shutterfly.com/pictures/231', 'Historic congregation photos', 'View Shutterfly photo album in new tab']
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle' : 'Explore',
                                              'sideNavGroup' : [{ 'linkText'   : 'Pastor',
                                                                  'linkPath'   : 'pastor.html'
                                                              },{ 'linkText'   : 'Congregation',
                                                                  'linkPath'   : 'congregation.html',
                                                                  'linkActive' : 'active'
                                                              },{ 'linkText'   : 'History',
                                                                  'linkPath'   : 'history.html'
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