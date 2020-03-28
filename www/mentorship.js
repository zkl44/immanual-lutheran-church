$( document ).ready(function() {
   //Retrieve the template data from the HTML
  var linkVoid = 'javascript:void(0)';
  var imagesRoot = 'images/';
  var pdfRoot = 'pdf/';
  var template_row = $('#rowTemplate').html();
  var template_column = $('#column-partial').html();
  var content = {
                  'row' : [{
                              'leftCol':  [{  'width' : '7',
                                              'sectionTitle' : 'Go the Distance',
                                              'paragraph' : [{  'text' : 'We want our youth to know how much we care about them! That’s why Immanuel currently supports a mentorship program for our 7th and 8th grade confirmation students.'
                                                            },{ 'text' : 'Here’s how it works: the youth are paired with an adult couple from the congregation. This couple engages in activities and events with their junior high mentee throughout the year. Most of these are large group activities where all mentors and mentees are present. However, the mentors are encouraged to remember their specific mentees in prayer and to take notice of special events like birthdays. We want our youth to know they are part of our family in Christ. We want to see them go the distance in Christ and His Church!'}],
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle' : 'Explore',
                                              'sideNavGroup' : [{ 'linkText'   : 'Calendar',
                                                                  'linkPath'   : 'calendar.html'
                                                              },{ 'linkText'   : 'Bulletins & Announcements',
                                                                  'linkPath'   : 'bulletins.html'
                                                              },{ 'linkText'   : 'Bible Classes',
                                                                  'linkPath'   : 'classes.html'
                                                              },{ 'linkText'   : 'Confirmation',
                                                                  'linkPath'   : 'confirmation.html'
                                                              },{ 'linkText'   : 'Ushers',
                                                                  'linkPath'   : 'ushers.html'
                                                              },{ 'linkText'   : 'Acolytes',
                                                                  'linkPath'   : 'acolytes.html',
                                                              },{ 'linkText'   : 'Choir',
                                                                  'linkPath'   : 'choir.html'
                                                              },{ 'linkText'   : 'Mentorship Program',
                                                                  'linkPath'   : 'mentorship.html',
                                                                  'linkActive' : 'active'
                                                              },{ 'linkText'   : 'Togo Missionary',
                                                                  'linkPath'   : 'missionary.html'
                                                              },{ 'linkText'   : 'Officers',
                                                                  'linkPath'   : 'officers.html'
                                                }]
                              }]
                      }]
             };
  
  var templateScript = Handlebars.compile(template_row);
  
  Handlebars.registerPartial('column', template_column);

  var html = templateScript(content);
  
  $('#main').append(html);
  
});