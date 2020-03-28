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
                                              'sectionTitle' : 'For the Whole Family',
                                              'paragraph' : [{  'text' : 'Immanuel Lutheran Church offers a well-rounded education in the Bible and Lutheranism for the whole family!  On Sunday mornings, our pre-school through 8th grade youth are involved in Sunday School at 9:00 AM.  Stories from both the Old Testament and New Testament fill our children’s hearts and minds with the truth of God’s Word and the wonderful Gospel of Jesus Christ, our Savior.  Also at 9:00 AM, adults (high school and above) meet for the Sunday Morning Bible Class with our Pastor.  This class considers special topics, books of the Bible, and how Lutheranism is at work to engage today’s world.'
                                                           },{  'text' : 'Immanuel also offers special Bible classes designed for men and women.  The women’s Bible class, led by Sara Sorenson, meets twice a month on Thursday evenings at 7:00 PM.  The men’s Bible breakfast meets once or twice a month on Tuesday mornings at 8:00 AM.'
                                                           },{  'text' : 'Confirmation instruction is also available for youth, from 5th to 8th grades.'
                                               }],
                                           },{
                                              'sectionTitle' : 'Classes',
                                              'indentedGroup' : [{ 'groupHeading' : 'Sunday School (pre-school through 8th grade):',
                                                                     'groupItem' : [{ 'text' : '9:00 AM Sundays',
                                                                                  }]
                                                                 },{ 'groupHeading' : 'Bible Class (high school and up):',
                                                                     'groupItem' : [{ 'text' : '9:00 AM Sundays'
                                                                                  }]
                                                                 },{'groupHeading' : "Women's Bible Class:",
                                                                     'groupItem' : [{ 'text' : '7:00 PM Thursdays twice per month'
                                                                                  }]
                                                                 },{'groupHeading' : "Men's Bible Breakfast:",
                                                                     'groupItem' : [{ 'text' : '8:00 AM Tuesdays once/twice per month'
                                                                                  }]

                                                                 }]
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle' : 'Explore',
                                              'sideNavGroup' : [{ 'linkText'   : 'Calendar',
                                                                  'linkPath'   : 'calendar.html'
                                                              },{ 'linkText'   : 'Bulletins & Announcements',
                                                                  'linkPath'   : 'bulletins.html'
                                                              },{ 'linkText'   : 'Bible Classes',
                                                                  'linkPath'   : 'classes.html',
                                                                  'linkActive' : 'active'
                                                              },{ 'linkText'   : 'Confirmation',
                                                                  'linkPath'   : 'confirmation.html'
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