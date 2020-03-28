$( document ).ready(function() {
   //Retrieve the template data from the HTML
  var linkVoid = 'javascript:void(0)';
  var imagesRoot = 'images/';
  var pdfRoot = 'pdf/';
  var template_row = $('#rowTemplate').html();
  var template_column = $('#column-partial').html();
  var content = {
                  'row' : [{
                              'leftCol':  [ { 'width' : '7',
                                              'addClass' : 'indentedGroup-noGroupHeader',
                                              'sectionTitle' : 'We Believe...',
                                              'indentedGroup' : [{   'groupItem' : [{ 'text' : 'in the historic Christian faith as expressed in the Apostles’, Nicene, and Athanasian Creeds.',
                                                                                },{   'text' : 'in One God: Father, Son, and Holy Spirit. There are three distinct persons in one divine essence. The Father is God, the Son is God, and the Holy Spirit is God; yet there are not three gods, but only one God.',
                                                                                },{   'text' : 'that the Holy Scriptures are the only infallible source and norm of all that we teach and believe. The Holy Spirit inspired the authors of Holy Scripture to write exactly what God wanted them to record (verbal inspiration).',
                                                                                },{   'text' : 'that all people come into this world as sinners in need of the new birth that God alone can give.',
                                                                                },{   'text' : 'that Jesus Christ, the Incarnate Son of God, came into this world to rescue us from the consequences of our sinful nature and our sinful thoughts, words, and deeds.',
                                                                                },{   'text' : 'that God is at work to give faith and strength for Christian living through the means He has appointed (Baptism, the spoken Absolution from sin, the preaching of the Gospel, and the Lord’s Supper).',
                                                                                },{   'text' : 'that Christ gathers His Church; believers come together around the means of grace in local congregations in order to be fed by Christ.',
                                                                                },{   'text' : 'that God gives us the gift of eternal life completely by His grace, which is received in faith.',
                                                                                },{   'text' : 'that Christ is coming to judge the living and dead. Christ’s people will dwell with Him forever and ever.',
                                                                                },{   'text' : 'in the general resurrection on the Last Day, both the resurrection of the righteous and the resurrection of the lost.'                                                                               
                                                                                }]
                                                                 }]
                                          },{
                                               'paragraph' : [{  'text' : 'For a fuller presentation of our beliefs, we invite you to visit the doctrine page.'
                                               }]  
                                          },{ 'sectionTitle' : 'The Lutheran Church – Missouri Synod',
                                              'paragraph' : [{  'text' : 'You’ll often hear our brand of Lutheranism called simply “the Missouri Synod.”  We are a conservative group with roughly 2 million members in the United States.  We are the second largest body of Lutherans in the country.  Since our organization in 1847, we have continued to vigorously proclaim God’s Holy Word – the Law that shows us our sin and the Gospel that shows us our Savior. The LCMS is a member of the International Lutheran Council that comprises over 30 Lutheran church bodies around the world who are devoted to the truth of the Bible and the Lutheran Confessions.  Here at home, the Missouri Synod is in fellowship with the AALC, the American Association of Lutheran Churches.'
                                               }],
                                              'externalLink' : ['https://www.lcms.org/', 'Synod Website', 'Visit the Synod website']
                                          },{ 'sectionTitle' : 'Minnesota South – LCMS',
                                              'paragraph' : [{  'text' : 'The Lutheran Church – Missouri Synod is divided into geographical districts.  These districts and their officers support the local congregations as they seek to carry out the mission of Christ.  Because there are so many Missouri Synod Lutherans in Minnesota, the LCMS has two districts that seek to assist the congregations in this State.  Immanuel Lutheran Church is located in the Minnesota South District.'
                                               }],
                                              'externalLink' : ['http://www.mnsdistrict.org/', 'District Website', 'Visit the South District website'],
                                          },{ 'sectionTitle' : 'Other Links',
                                              'externalLink' : ['http://www.bookofconcord.org/smallcatechism.php', 'The Small Catechism', 'Learn more about The Small Catechism on the Book of Concord website']
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
                                                                  'linkPath'   : 'beliefs.html',
                                                                  'linkActive' : 'active'
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