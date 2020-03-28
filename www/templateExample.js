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
                                              'sectionTitle' : 'About',
                                              'paragraph' : [{  'text' : 'Immanuel Lutheran Church of Hay Creek Township (Red Wing), Minnesota has been a congregation since the year Minnesota became a State – 1858!  We are a confessional congregation of The Lutheran Church – Missouri Synod (LCMS).  United in what we believe, teach, and confess, we gather around God’s Word, the Bible, and the Holy Sacraments, in order that we would know Christ and make Him known to the world!  We would love to have you join us in worship, study, prayer, and fellowship!'}],
                                              'pdfLink' : ['path/to/whaterevr', 'Learn More', 'about whatever this is about']
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'image' : [imagesRoot + 'church.jpg', 'graphic showing the church...']
                                          }]
                         },{
                              'leftCol':  [{  'width' : '4',
                                              'image' : [imagesRoot + 'church.jpg', 'graphic showing the church...']
                                          }],
                              'rightCol': [{  'width' : '7 offset-lg-1',
                                              'sectionTitle' : 'About',
                                              'paragraph' : [{  'text' : 'Immanuel Lutheran Church of Hay Creek Township (Red Wing), Minnesota has been a congregation since the year Minnesota became a State – 1858!  We are a confessional congregation of The Lutheran Church – Missouri Synod (LCMS).  United in what we believe, teach, and confess, we gather around God’s Word, the Bible, and the Holy Sacraments, in order that we would know Christ and make Him known to the world!  We would love to have you join us in worship, study, prayer, and fellowship!'}],
                                              'buttonLink' : ['path/to/whaterevr', 'Learn More', 'about whatever this is about'],
                                          }]
                        },{
                              'leftCol':  [{  'width' : '7',
                                              'sectionTitle' : 'About',
                                              'paragraph' : [{  'text' : 'Immanuel Lutheran Church of Hay Creek Township (Red Wing), Minnesota has been a congregation since the year Minnesota became a State – 1858!  We are a confessional congregation of The Lutheran Church – Missouri Synod (LCMS).  United in what we believe, teach, and confess, we gather around God’s Word, the Bible, and the Holy Sacraments, in order that we would know Christ and make Him known to the world!  We would love to have you join us in worship, study, prayer, and fellowship!'}],
                                              'buttonLink' : ['path/to/whaterevr', 'Learn More', 'about whatever this is about'],
                                              'externalLink' : ['http://www.whateverUrl.com', 'Learn More', 'about whatever this is about']
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle' : 'Menu List',
                                              'sideNavGroup' : [{ 'linkText' : 'Link 1',
                                                                  'linkPath' : 'path-to-link-1'
                                                              },{ 'linkText' : 'Link 2',
                                                                  'linkPath' : 'path-to-link-2'
                                                              },{ 'linkText' : 'Link 3',
                                                                  'linkPath' : 'path-to-link-3'
                                                              },{ 'linkText' : 'Link 4',
                                                                  'linkPath' : 'path-to-link-4'
                                                }]
                              }]
                      },{
                              'leftCol':  [{  'width' : '7',
                                              'sectionTitle' : 'About',
                                              'paragraph' : [{  'text' : 'Some paragraph here'}]
                                          }],
                              'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle'  : 'Hours',
                                              'indentedGroup' : [{ 'groupHeading' : 'heading1',
                                                                   'groupItem' : [{ 'text' : 'line 1',
                                                                                },{ 'text' : 'line 2',
                                                                                },{ 'text' : 'line 3'
                                                                    }]
                                                               },{ 'groupHeading' : 'heading2',
                                                                   'groupItem' : [{ 'text' : 'line 1',
                                                                                },{ 'text' : 'line 2',
                                                                                },{ 'text' : 'line 3'
                                                                    }]
                                                               }]
                              }]
                      }]
             };
  
  var templateScript = Handlebars.compile(template_row);
  
  Handlebars.registerPartial('column', template_column);

  var html = templateScript(content);
  
  $('#main').append(html);
  
});