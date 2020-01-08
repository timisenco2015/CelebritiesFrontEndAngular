import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemCelebrityService implements InMemoryDbService {
  createDb() {
    let celebrities = [
        {
            "firstName":"Usain",
            "lastName":"Bolt",
            "profession":"Field Athlete"
        },
    
        {
            "firstName":"LeBron",
           
            "lastName":"James",
            "profession":"Basketballer"
        },
    
        {
            "firstName":"Cristiano",
           
            "lastName":"Ronaldo",
            "profession":"Footballer"
        },
    
        {
            "firstName":"Lionel",
           
            "lastName":"Messi",
            "profession":"Footballer"
        },
        {
            "firstName":"Michael",
           
            "lastName":"Jordan",
            "profession":"Basketballer"
        }
        ,
        {
            "firstName":"Roger",
           
            "lastName":"Federer",
            "profession":"Basketballer"
        },
        {
            "firstName":"Carl",
           
            "lastName":"Lewis",
            "profession":"Athlete"
        },
        {
            "firstName":"Tiger",
           
            "lastName":"Wood",
            "profession":"Golfer"
        }
    
        ,
        {
            "firstName":"Serena",
           
            "lastName":"Williams",
            "profession":"Tennis Player"
        }
    
        ,
        {
            "firstName":"Michael",
           
            "lastName":"Phelps",
            "profession":"Swimmer"
        }
        ,
        {
            "firstName":"Muhammad",
           
            "lastName":"Ali",
            "profession":"Boxer"
        }
    
        ,
        {
            "firstName":"Stepehen",
           
            "lastName":"Curry",
            "profession":"Basketballer"
        }
        ,
        {
            "firstName":"Floyd",
           
            "lastName":"Mayweather",
            "profession":"Boxer"
        }
    
        ,
        {
            "firstName":"Manny",
           
            "lastName":"Pacquiao",
            "profession":"Boxer"
        }
        ,
        {
            "firstName":"Deontay",
           
            "lastName":"Wilder",
            "profession":"Boxer"
        }
        ,
        {
            "firstName":"Anthony",
           
            "lastName":"Joshua",
            "profession":"Boxer"
        }
        ,
        {
            "firstName":"Joe",
           
            "lastName":"Calzaghe",
            "profession":"Boxer"
        }
        ,
        {
            "firstName":"Lennox",
           
            "lastName":"Lewis",
            "profession":"Boxer"
        }
    
        ,
        {
            "firstName":"Jenny",
           
            "lastName":"Thompson",
            "profession":"Swimmer"
        }
        ,
        {
            "firstName":"Kristin",
           
            "lastName":"Otto",
            "profession":"Swimmer"
        }
        ,
        {
            "firstName":"Amy",
           
            "lastName":"Dyken",
            "profession":"Swimmer"
        }
        ,
        {
            "firstName":"Krisztina",
           
            "lastName":"Egerszegi",
            "profession":"Swimmer"
        },
        {
            "firstName":"Danna",
           
            "lastName":"Vollmer",
            "profession":"Swimmer"
        },
        {
            "firstName":"Mark",
           
            "lastName":"SpitZ",
            "profession":"Swimmer"
        },
        {
            "firstName":"Matt",
            "lastName":"Biondi",
            "profession":"Swimmer"
        },
        {
            "firstName":"Ryan",
            "lastName":"Lochte",
            "profession":"Swimmer"
        },
        {
            "firstName":"Phil",
            "lastName":"Mickelson",
            "profession":"Golfer"
        } ,
        {
            "firstName":"Jordan",
            "lastName":"Spieth",
            "profession":"Golfer"
        },
        {
            "firstName":"Justin",
            "lastName":"Thomasn",
            "profession":"Golfer"
        } ,
        {
            "firstName":"Sergio",
            "lastName":"Garcia",
            "profession":"Golfer"
        } ,
        {
            "firstName":"Inbee",
            "lastName":"Park",
            "profession":"Golfer"
        } ,
        {
            "firstName":"Lydia",
            "lastName":"Ko",
            "profession":"Golfer"
        } ,
        {
            "firstName":"Lexi",
            "lastName":"Thompson",
            "profession":"Golfer"
        },
    
        {
            "firstName":"Marta",
            "lastName":"DaSilva",
            "profession":"Footballer"
        },
        {
            "firstName":"Christine",
           
            "lastName":"Sinclair",
            "profession":"Footballer"
        },
        {
            "firstName":"Alex",
           
            "lastName":"Morgan",
            "profession":"Footballer"
        },
        {
            "firstName":"Abby",
           
            "lastName":"Wambach",
            "profession":"Footballer"
        },
        {
            "firstName":"Birgit",
            "lastName":"Prinz",
            "profession":"Footballer"
        }
        ,
        {
            "firstName":"Arjen",
            "lastName":"Robben",
            "profession":"Footballer"
        },
        {
            "firstName":"Frank",
           
            "lastName":"Lampard",
            "profession":"Footballer"
        },
        {
            "firstName":"John",
            "lastName":"Terry",
            "profession":"Footballer"
        },
        {
            "firstName":"Lady",
            "lastName":"Gaga",
            "profession":"Singer"
        },
        {
            "firstName":"Beyonce",
            "lastName":"Knowles-Carter",
            "profession":"Singer"
        },
        {
            "firstName":"Adele",
            "lastName":"Adkins",
            "profession":"Singer"
        },
        {
            "firstName":"Taylor",
            "lastName":"Swift",
            "profession":"Singer"
        },
        {
            "firstName":"Whitney",
            "lastName":"Houston",
            "profession":"Singer"
        },
        {
            "firstName":"Celine",
            "lastName":"Dion",
            "profession":"Singer"
        },
        {
            "firstName":"Bruce",
            "lastName":"Springsteen",
            "profession":"Singer"
        }
        ,
        {
            "firstName":"Bob",
            "lastName":"Dylan",
            "profession":"Singer"
        },
        {
            "firstName":"Justin",
            "lastName":"Bieber",
            "profession":"Singer"
        },
        {
            "firstName":"Ray",
            "lastName":"Charles",
            "profession":"Singer"
        },
        {
            "firstName":"Barack",
            "lastName":"Obama",
            "profession":"Politician"
        },
        {
            "firstName":"Hillary",
            "middleName":"Rodham",
            "lastName":"Clinton",
            "profession":"Politician"
        },
        {
            "firstName":"Joe",
            "lastName":"Biden",
            "profession":"Politician"
        },
        {
            "firstName":"Nancy",
            "lastName":"Pelosi",
            "profession":"Politician"
        },
        {
            "firstName":"Justin",
            "lastName":"Trudeau",
            "profession":"Politician"
        },
        {
            "firstName":"Elizabeth",
            "lastName":"Warren",
            "profession":"Politician"
        },
        {
            "firstName":"Richard",
            "lastName":"Nixon",
            "profession":"Politician"
        },
        {
            "firstName":"Michael",
            "lastName":"Bloomberg",
            "profession":"Politician"
        },
        {
            "firstName":"Ellen",
            "lastName":"DeGeneres",
            "profession":"Television Host"
        },
        {
            "firstName":"Oprah",
            "lastName":"Winfrey",
            "profession":"Television Host"
        },
        {
            "firstName":"Robert",
            "lastName":"Downey",
            "profession":"Actor"
        },
        {
            "firstName":"Leonardo",
            "middleName":"Wilhelm",
            "lastName":"DiCaprio",
            "profession":"Actor"
        },
        {
            "firstName":"Tom",
            "lastName":"Cruise",
            "profession":"Actor"
        },
        {
            "firstName":"Will",
            "lastName":"Smith",
            "profession":"Actor"
        },
        {
            "firstName":"Johnny",
            "lastName":"Doepp",
            "profession":"Actor"
        },
        {
            "firstName":"Jennifer",
            "lastName":"Lawrence",
            "profession":"Actress"
        },
        {
            "firstName":"Nicole",
            "lastName":"Kidman",
            "profession":"Actress"
        },
        {
            "firstName":"Charlize",
            "lastName":"Theron",
            "profession":"Actress"
        },
        {
            "firstName":"Natalie",
            "lastName":"Portman",
            "profession":"Actress"
        },
        {
            "firstName":"Angelina",
            "lastName":"Jolie",
            "profession":"Actress"
        },
        {
            "firstName":"Chris",
            "lastName":"Rock",
            "profession":"Comedian"
        },
        {
            "firstName":"Amy",
            "lastName":"Schumer",
            "profession":"Comedian"
        },
        {
            "firstName":"Jerry",
            "lastName":"Seinfeld",
            "profession":"Comedian"
        },
        {
            "firstName":"Sarah",
            "lastName":"Silverman",
            "profession":"Comedian"
        },
        {
            "firstName":"Wanda",
            "lastName":"Sykes",
            "profession":"Comedian"
        },
        {
            "firstName":"Kelvin",
            "lastName":"Hart",
            "profession":"Comedian"
        },
        {
            "firstName":"Louis",
            "lastName":"Szekely",
            "profession":"Comedian"
        },
        {
            "firstName":"Tina",
            "lastName":"Fey",
            "profession":"Comedian"
        },
        {
            "firstName":"Tig",
            "lastName":"Notaro",
            "profession":"Comedian"
        }
    ]
    return {celebrities};
  }
}