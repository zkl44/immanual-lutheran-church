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
                                              'sectionTitle' : 'Choir',
                                              'paragraph' : [{  'text' : 'Many small congregations are not able to enjoy the benefits of a church choir.  We are blessed here at Hay Creek to have singers who are willing and able to participate in a choir.  The church choir has a long history at Hay Creek.  Many older members have fond memories of their time in choir.'
                                                           },{  'text' : 'The choir sings twice a month from September through May.  The group is under the direction of Sara Sorenson, Immanuel’s regular organist.  All those with a love of singing are welcome and encouraged to join the church choir.  Choir provides an avenue for midweek fellowship and Christian devotion.'
                                              }]
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
                                                                  'linkPath'   : 'acolytes.html'
                                                              },{ 'linkText'   : 'Choir',
                                                                  'linkPath'   : 'choir.html',
                                                                  'linkActive' : 'active'
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