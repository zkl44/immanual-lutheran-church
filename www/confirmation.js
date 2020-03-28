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
                                              'sectionTitle' : 'Confirmation',
                                              'image' : [imagesRoot + 'confirmation.jpg', 'photo of 2016 confirmation class']
                                          },{
                                              'paragraph' : [{  'text' : 'Immanuel, Hay Creek takes Christian education very seriously.  It has been central to our congregation from the beginning.  Our confirmation program for youth is based on four years of solid instruction in the Bible and The Small Catechism.  Grades 5 and 6 meet every other week from September through May to review and build on their Bible knowledge gained in Sunday School.  Grades 7 and 8 meet every week to discuss what Lutherans believe about everything from baptism to angels to what happens when we leave this world.  Also included in the discussion are issues that challenge the church’s people in the world we currently live in.  The goal is to prepare students for an informed life of faith that is fed constantly from the treasures God provides: His Holy Word and precious Sacraments.'}],
                                              'externalLink' : ['https://immanuelhaycreekphotos.shutterfly.com/pictures/209', 'Confirmation photos: 2000-present', 'View Shutterfly photo album in new tab']
                                          },{ 'externalLink' : ['https://immanuelhaycreekphotos.shutterfly.com/pictures/122', 'Confirmation photos: 1950-1999', 'View Shutterfly photo album in new tab']      
                                          },{ 'externalLink' : ['https://immanuelhaycreekphotos.shutterfly.com/pictures/8', 'Confirmation photos: 1907-1949', 'View Shutterfly photo album in new tab']      
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
                                                                  'linkPath'   : 'confirmation.html',
                                                                  'linkActive' : 'active'
                                                              },{ 'linkText'   : 'Ushers',
                                                                  'linkPath'   : 'ushers.html'
                                                              },{ 'linkText'   : 'Acolytes',
                                                                  'linkPath'   : 'acolytes.html'
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