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
                                              'sectionTitle' : 'Shine the Light',
                                              'paragraph' : [{  'text' : 'From the Greek akolouthos, an acolyte is a special worship assistant who assists the pastor in the church’s worship. Ordinarily in Lutheran congregations, acolytes are specially designated people who primarily serve by lighting the candles in preparation for the liturgical service. This involves the candles on the church’s altar. However, depending on the Sunday, baptismal or paschal candles may also be used.'
                                                            },{ 'text' : 'At Immanuel Lutheran Church, confirmation students serve as acolytes throughout the duration of their four-year program, from 5th through 8th grades.'
                                                            },{ 'text' : 'Candles in church remind us of Jesus, the Light of the world, and also of Christian people, who shine the light of the Gospel by a true confession of God’s Name (John 8:12; Matthew 5:16).'
                                                              
                                                            }],
                                              'pdfLink' : [pdfRoot + 'AcolyteSchedule.pdf', 'Acolyte Schedule', 'View as PDF (opens in new tab or downloads depending on your settings)']
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
                                                                  'linkActive' : 'active'
                                                              },{ 'linkText'   : 'Choir',
                                                                  'linkPath'   : 'choir.html'
                                                              },{ 'linkText'   : 'Mentorship Program',
                                                                  'linkPath'   : 'mentorship.html'
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