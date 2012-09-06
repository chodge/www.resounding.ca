using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Resounding.Tournaments.Models
{
    public class Initializer : DropCreateDatabaseAlways<TournamentsContext>
    {
        protected override void Seed(TournamentsContext context)
        {
            var dreamTeam = new Team {
                Name = "1992 Olympic Men's Basketball Team",
                HomeField = "Various",
                Coach = new Coach {
                    Name = "Chuck Daly",
                    Email = "chuck.daly@olympics.org",
                    PhoneNumber = "(989) 555-2345"
                },
                Players = new List<Player> {
                    new Player { Name = "Laettner, Christian", Position = "Power Foward", Number = "4", Email="christian@olympics.org", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Robinson, David", Position = "Center", Number = "5", Email="admiral@olympics.org", PhoneNumber="(786) 545-4651" },
                    new Player { Name = "Ewing, Patrick", Position = "Center", Number = "6", Email="patrick@olympics.org", PhoneNumber="(786) 545-4933" },
                    new Player { Name = "Bird, Larry", Position = "Small Forward", Number = "7", Email="bird@olympics.org", PhoneNumber="(786) 545-2530" },
                    new Player { Name = "Pippen, Scottie", Position = "Small Forward", Number = "8", Email="scottie@olympics.org", PhoneNumber="(786) 545-4547" },
                    new Player { Name = "Jordan, Michael", Position = "Shooting Guard", Number = "9", Email="mj@olympics.org", PhoneNumber="(786) 545-9283 " },
                    new Player { Name = "Drexler, Clyde", Position = "Shooting Guard", Number = "10", Email="the_glide@olympics.org", PhoneNumber="(786) 545-0252" },
                    new Player { Name = "Malone, Karl", Position = "Power Forward", Number = "11", Email="mailman@olympics.org", PhoneNumber="(786) 545-0252" },
                    new Player { Name = "Stockton, John", Position = "Point Guard", Number = "12", Email="stockton@olympics.org", PhoneNumber="(786) 545-0252" },
                    new Player { Name = "Mullin, Chris", Position = "Small Forward", Number = "13", Email="mullin@olympics.org", PhoneNumber="(786) 545-0252" },
                    new Player { Name = "Barkley, Charles", Position = "Power Foward", Number = "14", Email="sircharles@olympics.org", PhoneNumber="(786) 545-0252" },
                    new Player { Name = "Johnson, Magic", Position = "Point Guard", Number = "15", Email="magic@olympics.org", PhoneNumber="(786) 545-0252" }
                }
            };
            var jays = new Team {
                Name = "1994 Toronto Blue Jays",
                HomeField = "SkyDome",
                Coach = new Coach {
                    Name = "Cito Gaston",
                    Email = "cito@bluejays.com",
                    PhoneNumber = "(416) 555-4584"
                },
                Players = new List<Player> {
                    new Player { Name = "Pat Borders", Position = "Catcher", Number = "10", Email="borders@bluejays.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "John Olerud", Position = "First Base", Number = "9", Email="olerud@bluejays.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Roberto Alomar", Position = "Second Base", Number = "12", Email="robbie@bluejays.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Ed Sprague", Position = "Third Base", Number = "33", Email="eddie@bluejays.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Dick Schofield", Position = "Shortstop", Number = "4", Email="schofield@bluejays.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Joe Carter", Position = "Left Field", Number = "29", Email="joe@bluejays.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Devon White", Position ="Center Field", Number = "25", Email="devon@bluejays.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Mike Huff", Position = "Right Field", Number = "26", Email="huff@bluejays.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Paul Molitor", Position = "Designated Hitter", Number = "19", Email="paul@bluejays.com", PhoneNumber="(786) 545-3632" }
                }
            };

            var yankees = new Team {
                Name = "1956 New York Yankees",
                HomeField = "Yankee Stadium",
                Coach = new Coach {
                    Name = "Casey Stengel",
                    Email = "casey@yankees.com",
                    PhoneNumber = "(887) 555-1237"
                },
                Players = new List<Player> {
                    new Player { Name = "Yogi Berra", Position = "Catcher", Number = "8", Email="yogi@yankees.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Bill Skowron", Position = "Infielder", Number = "14", Email="moose@yankees.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Billy Martin", Position = "Infielder", Number = "1", Email="billy@yankees.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Andy Carey", Position = "Infielder", Number = "6", Email="andy@yankees.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Gil McDougald", Position = "Infielder", Number = "12", Email="gil@yankees.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Elston Howard", Position = "Outfielder", Number = "32", Email="elston@yankees.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Mickey Mantle", Position = "Outfielder", Number = "7", Email="mick@yankees.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Hank Bauer", Position = "Outfielder", Number = "9", Email="hank@yankees.com", PhoneNumber="(786) 545-3632" }
                }
            };

            var oilers = new Team {
                Name = "1988 Edmonton Oilers",
                HomeField = "Northlands Coliseum",
                Coach = new Coach {
                    Name = "Glen Sather",
                    Email = "glen_sather@oilers.com",
                    PhoneNumber = "(346) 555-8674"
                },
                Players = new List<Player> {
                    new Player { Name = "Wayne Gretzky", Position = "Centre", Number = "99", Email="greatone@oilers.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Mark Messier", Position = "Centre", Number = "11", Email="mess@oilers.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Dave Hannan", Position = "Centre", Number = "12", Email="dave@oilers.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Craig MacTavish", Position = "Centre", Number = "14", Email="craig@oilers.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Glenn Anderson", Position = "Winger", Number = "9", Email="glennie@oilers.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Esa Tikkanen", Position = "Winger", Number = "10", Email="esa@oilers.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Marty McSorley", Position = "Defense", Number = "33", Email="marty@oilers.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Jeff Beukeboom", Position = "Defense", Number = "6", Email="boomer@oilers.com", PhoneNumber="(786) 545-3632" },
                    new Player { Name = "Grant Fuhr", Position = "Goaltende", Number = "31", Email="fuhr@oilers.com", PhoneNumber="(786) 545-3632" }
                }
            };

            var tournament = new Tournament {
                Name = "Resounding Tournament",
                Teams = new List<Team> {
                    dreamTeam,
                    jays,
                    yankees,
                    oilers
                }
            };

            context.Games.Add(
                new Game {
                    Home = dreamTeam,
                    Away = jays,
                    Date = new DateTime(2012, 9, 3, 19, 0, 0)
                }
            );
            context.Games.Add(
                new Game {
                    Home = yankees,
                    Away = oilers,
                    Date = new DateTime(2012, 9, 3, 19, 0, 0)
                }
            );
            context.Games.Add(
                new Game {
                    Home = dreamTeam,
                    Away = yankees,
                    Date = new DateTime(2012, 9, 4, 19, 0, 0)
                }
            );
            context.Games.Add(
                new Game {
                    Home = jays,
                    Away = oilers,
                    Date = new DateTime(2012, 9, 4, 19, 0, 0)
                }
            );
            context.Games.Add(
                new Game {
                    Home = dreamTeam,
                    Away = oilers,
                    Date = new DateTime(2012, 9, 5, 19, 0, 0)
                }
            );
            context.Games.Add(
                new Game {
                    Home = jays,
                    Away = yankees,
                    Date = new DateTime(2012, 9, 6, 19, 0, 0)
                }
            );

            context.Tournaments.Add(tournament);
            context.SaveChanges();
        }
    }
}
