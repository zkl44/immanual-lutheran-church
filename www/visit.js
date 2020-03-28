$( document ).ready(function() {
   //Retrieve the template data from the HTML
  var linkVoid = 'javascript:void(0)';
  var imagesRoot = 'images/';
  var pdfRoot = 'pdf/';
  var template_row = $('#rowTemplate').html();
  var template_column = $('#column-partial').html();
  var content = {
                  'row' : [{
                              'leftCol': [{   'width' : '7',
                                              'sectionTitle' : 'Join Us!',
                                              'paragraph' : [{  'text' : 'We are located in Hay Creek Township, Minnesota – just a 10-minute, easy drive from Red Wing. We would love to have you join us in worship, study, prayer, and fellowship!'
                                                            }]
                                          },{ 
                                              'addClass' : 'font-italic negative_column_space',
                                              'paragraph' : [{  'text' : '*For purposes of our service hours listed on this page, the school year schedule includes the Sunday after Labor Day weekend through the Sunday before Memorial Day weekend. '
                                                            },{ 'text' : '**Summer worship is held Memorial Day weekend through Labor Day weekend.'
                                                            } ]
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle'  : 'Hours',
                                              'indentedGroup' : [{ 'groupHeading' : 'School year*:',
                                                                   'groupItem' : [{ 'text' : '9:00 AM Sunday School & Bible Class',
                                                                                },{ 'text' : '9:45 AM Fellowship Time (with coffee, lemonade, and treats)',
                                                                                },{ 'text' : '10:00 AM Worship'
                                                                    }]
                                                               },{ 'groupHeading' : 'Summer**:',
                                                                   'groupItem' : [{ 'text' : '9:30 AM Worship'
                                                                                }]
                                                               },{'groupHeading' : 'Other services:',
                                                                   'groupItem' : [{ 'text' : '7:00 PM Advent, Lent & Ascension Day'
                                                                                }]
                                                                 
                                                               }]
                              }           ]
             }]
  }
  
  var templateScript = Handlebars.compile(template_row);
  
  Handlebars.registerPartial('column', template_column);

  var html = templateScript(content);
  
  $('#main').append(html);
  
});