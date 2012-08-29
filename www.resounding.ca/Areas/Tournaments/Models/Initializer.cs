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
            var tournament = new Tournament {
                Name = "Resounding Tournament",
                Teams = new List<Team> {
                    new Team {
                        Name = "1992 Olympic Men's Basketball Team",
                        HomeField = "Various",
                        Coach = new Coach {
                            Name = "Chuck Daly",
                            Email = "chuck.daly@olympics.org",
                            PhoneNumber = "(989) 555-2345"
                        },
                        Players = new List<Player> {
                            new Player { Name = "Laettner, Christian", Position = "Power Foward", Number = "4" },
                            new Player { Name = "Robinson, David", Position = "Center", Number = "5" },
                            new Player { Name = "Ewing, Patrick", Position = "Center", Number = "6" },
                            new Player { Name = "Bird, Larry", Position = "Small Forward", Number = "7" },
                            new Player { Name = "Pippen, Scottie", Position = "Small Forward", Number = "8" },
                            new Player { Name = "Jordan, Michael", Position = "Shooting Guard", Number = "9" },
                            new Player { Name = "Drexler, Clyde", Position = "Shooting Guard", Number = "10" },
                            new Player { Name = "Malone, Karl", Position = "Power Forward", Number = "11" },
                            new Player { Name = "Stockton, John", Position = "Point Guard", Number = "12" },
                            new Player { Name = "Mullin, Chris", Position = "Small Forward", Number = "13" },
                            new Player { Name = "Barkley, Charles", Position = "Power Foward", Number = "14" },
                            new Player { Name = "Johnson, Magic", Position = "Point Guard", Number = "15" }
                        }
                    },
                    new Team {
                        Name = "1994 Toronto Blue Jays",
                        HomeField = "SkyDome",
                        Coach = new Coach {
                            Name = "Cito Gaston",
                            Email = "cito@bluejays.com",
                            PhoneNumber = "(416) 555-4584"
                        },
                        Players = new List<Player> {
                            new Player { Name = "Pat Borders", Position = "Catcher", Number = "10" },
                            new Player { Name = "John Olerud", Position = "First Base", Number = "9" },
                            new Player { Name = "Roberto Alomar", Position = "Second Base", Number = "12" },
                            new Player { Name = "Ed Sprague", Position = "Third Base", Number = "33" },
                            new Player { Name = "Dick Schofield", Position = "Shortstop", Number = "4" },
                            new Player { Name = "Joe Carter", Position = "Left Field", Number = "29" },
                            new Player { Name = "Devon White", Position ="Center Field", Number = "25" },
                            new Player { Name = "Mike Huff", Position = "Right Field", Number = "26" },
                            new Player { Name = "Paul Molitor", Position = "Designated Hitter", Number = "19" }
                        }
                    },
                    new Team {
                        Name = "1956 New York Yankees",
                        HomeField = "Yankee Stadium",
                        Coach = new Coach {
                            Name = "Casey Stengel",
                            Email = "casey@yankees.com",
                            PhoneNumber = "(887) 555-1237"
                        },
                        Players = new List<Player> {
                            new Player { Name = "Yogi Berra", Position = "Catcher", Number = "8" },
                            new Player { Name = "Bill Skowron", Position = "Infielder", Number = "14" },
                            new Player { Name = "Billy Martin", Position = "Infielder", Number = "1" },
                            new Player { Name = "Andy Carey", Position = "Infielder", Number = "6" },
                            new Player { Name = "Gil McDougald", Position = "Infielder", Number = "12" },
                            new Player { Name = "Elston Howard", Position = "Outfielder", Number = "32" },
                            new Player { Name = "Mickey Mantle", Position = "Outfielder", Number = "7" },
                            new Player { Name = "Hank Bauer", Position = "Outfielder", Number = "9" }
                        }
                    },
                    new Team {
                        Name = "1988 Edmonton Oilers",
                        HomeField = "Northlands Coliseum",
                        Coach = new Coach {
                            Name = "Glen Sather",
                            Email = "glen_sather@oilers.com",
                            PhoneNumber = "(346) 555-8674"
                        },
                        Players = new List<Player> {
                            new Player { Name = "Wayne Gretzky", Position = "Centre", Number = "99" },
                            new Player { Name = "Mark Messier", Position = "Centre", Number = "11" },
                            new Player { Name = "Dave Hannan", Position = "Centre", Number = "12" },
                            new Player { Name = "Craig MacTavish", Position = "Centre", Number = "14" },
                            new Player { Name = "Glenn Anderson", Position = "Winger", Number = "9" },
                            new Player { Name = "Esa Tikkanen", Position = "Winger", Number = "10" },
                            new Player { Name = "Marty McSorley", Position = "Defense", Number = "33" },
                            new Player { Name = "Jeff Beukeboom", Position = "Defense", Number = "6" },
                            new Player { Name = "Grant Fuhr", Position = "Goaltende", Number = "31" }
                        }
                    }
                }
            };
            context.Tournaments.Add(tournament);
            context.SaveChanges();
        }
    }
}
