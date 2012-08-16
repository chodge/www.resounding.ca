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
                        Players = new List<Player> {
                            new Player { Name = "Laettner, Christian" },
                            new Player { Name = "Robinson, David" },
                            new Player { Name = "Ewing, Patrick" },
                            new Player { Name = "Bird, Larry" },
                            new Player { Name = "Pippen, Scottie" },
                            new Player { Name = "Jordan, Michael" },
                            new Player { Name = "Drexler, Clyde" },
                            new Player { Name = "Malone, Karl" },
                            new Player { Name = "Stockton, John" },
                            new Player { Name = "Mullin, Chris" },
                            new Player { Name = "Barkley, Charles" },
                            new Player { Name = "Johnson, Magic" }
                        }
                    },
                    new Team {
                        Name = "1994 Toronto Blue Jays",
                        Players = new List<Player> {
                            new Player { Name = "Pat Borders" },
                            new Player { Name = "John Olerud" },
                            new Player { Name = "Roberto Alomar" },
                            new Player { Name = "Ed Sprague" },
                            new Player { Name = "Dick Schofield" },
                            new Player { Name = "Joe Carter" },
                            new Player { Name = "Devon White" },
                            new Player { Name = "Mike Huff" },
                            new Player { Name = "Paul Molitor" }
                        }
                    },
                    new Team {
                        Name = "1956 New York Yankees",
                        Players = new List<Player> {
                            new Player { Name = "Yogi Berra" },
                            new Player { Name = "Bill Skowron" },
                            new Player { Name = "Billy Martin" },
                            new Player { Name = "Andy Carey" },
                            new Player { Name = "Gil McDougald" },
                            new Player { Name = "Elston Howard" },
                            new Player { Name = "Mickey Mantle" },
                            new Player { Name = "Hank Bauer" }
                        }
                    },
                    new Team {
                        Name = "1988 Edmonton Oilers",
                        Players = new List<Player> {
                            new Player { Name = "Wayne Gretzky" },
                            new Player { Name = "Mark Messier" },
                            new Player { Name = "Dave Hannan" },
                            new Player { Name = "Craig MacTavish" },
                            new Player { Name = "Glenn Anderson" },
                            new Player { Name = "Esa Tikkanen" },
                            new Player { Name = "Marty McSorley" },
                            new Player { Name = "Grant Fuhr" }
                        }
                    }
                }
            };
            context.Tournaments.Add(tournament);
            context.SaveChanges();
        }
    }
}
