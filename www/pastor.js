$( document ).ready(function() {
   //Retrieve the template data from the HTML
  var linkVoid = 'javascript:void(0)';
  var imagesRoot = 'images/';
  var pdfRoot = 'pdf/';
  var template_row = $('#rowTemplate').html();
  var template_column = $('#column-partial').html();
  var content = {
                    'row' : [{
                                'leftCol': [{   
                                            'width' : '7',
                                            'sectionTitle' : 'Pastor Lowell S. Sorenson',
                                            'image' : [imagesRoot + 'pastorEdited.jpg', 'pastor family portrait']
                                 },{        'paragraph' : [{  'text' : 'Immanuel Lutheran Church – Hay Creek is served by Pastor Lowell Sorenson.  A Minnesota native, he was raised in Little Canada, a northeastern suburb of St. Paul.  In 2000, Rev. Sorenson earned his Bachelor of Arts degree summa cum laude (with highest distinction) from Concordia University, St. Paul.  Before graduation, the Faculty of Religion and Theology awarded him with departmental honors for his excellence in theological study.  That same year, the Department of Fine Arts also presented him with the Pro Artibus Award for his musicianship.  Pastor Sorenson is trained in both vocal and keyboard music.  In November 2004, he completed his Master of Divinity degree (M.Div.) from Concordia Theological Seminary in Fort Wayne, Indiana, where his emphasis was systematic (doctrinal) theology.  In the spring of 2018, Pastor Sorenson graduated with the Doctor of Ministry degree (D.Min.) from The University of Dubuque Theological Seminary in Dubuque, Iowa.  His dissertation is entitled: “Luther’s Deutsche Messe as Resource and Stimulus for Lutheran Liturgical Worship in the Twenty-First Century.”'
                                                          },{ 'text' : 'Pastor Sorenson was joined in Holy Matrimony to Sara (nee Hoff) on June the 12th, 1999 at Bethel Lutheran Church in St. Paul, Minnesota.  Sara is also a summa cum laude graduate and Pro Artibus Award recipient from Concordia University, St. Paul.  She is trained as a Director of Parish Music and currently is working on the Master of Church Music Degree (M.C.M.) in organ from Concordia University, Mequon, Wisconsin.  Sara is the regular organist for Immanuel as well as the choir director.  She also leads the Women’s Bible Study and serves the church as janitor.  Sara formerly played with the Southwest Michigan Symphony Orchestra as a violinist and served as a section leader.  She is currently teaching private piano and violin lessons.'
                                                          },{ 'text' : 'Pastor and Sara have two loving girls.  Chloe was born on February 16th, 2006, and Leah was born on February 16th, 2012.  They are two delightful girls who share the same birthday (six years apart) and even had the same weight at birth!  Chloe enjoys basketball, playing with her stuffed animals, and hanging out with friends and family (especially her cousins).  Leah enjoys Sunday School and anything with horses, orca whales, or dolphins.  Pastor and Sara are animal lovers.  They have a female dachshund named “Addie” and Chloe has a male Pomeranian named “Sunny.”  The Sorenson family also has two male cats: Malcolm and Kit Kat.'
                                             }],
                                             'pdfLink' : [pdfRoot + 'PreviousPastors.pdf', 'List of previous pastors', '(opens in new tab or downloads depending on your settings)'],
                                             'externalLink' : ['https://immanuelhaycreekphotos.shutterfly.com/pictures/314', 'Pastors & teachers photos', 'View Shutterfly photo album in new tab']
                                }],
                                'rightCol': [{  'width' : '4 offset-lg-1',
                                              'sectionTitle' : 'Explore',
                                              'sideNavGroup' : [{ 'linkText'   : 'Pastor',
                                                                  'linkPath'   : 'pastor.html',
                                                                  'linkActive' : 'active'
                                                              },{ 'linkText'   : 'Congregation',
                                                                  'linkPath'   : 'congregation.html'
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