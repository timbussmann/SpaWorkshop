namespace SpaWorkshop.Models
{
    using System.Collections.Generic;

    public class StoryRepository : IStoryRepository
    {
        public StoryRepository()
        {
            this.UserStories = new[]
                {
                    new UserStory
                        {
                            Id = 1,
                            Title = "List all stories",
                            Description =
                                "As a developer, I want to see all stories in the current sprint so I know how exhausting the sprint is going to be.",
                            StackRank = 999,
                            State = "Work In Progress"
                        },
                    new UserStory
                        {
                            Id = 2,
                            Title = "Update story state",
                            Description =
                                "As a Scrum Master, I want to update the state of a story so the code monkeys don't all implement the same story.",
                            StackRank = 990,
                            State = "Sprint Backlog"
                        },
                    new UserStory
                        {
                            Id = 3,
                            Title = "Chat with team members",
                            Description =
                                "As a developer, I want to chat with my team members so we can have a stand-up meeting without standing around.",
                            StackRank = 980,
                            State = "Sprint Backlog"
                        },
                    new UserStory
                        {
                            Id = 4,
                            Title = "Show Scrumboard",
                            Description =
                                "As a Scrum Master I want to see the Scrumboard so I have an overview of how slowly the sprint is progressing.",
                            StackRank = 970,
                            State = "Sprint Backlog"
                        },
                    new UserStory
                        {
                            Id = 5,
                            Title = "Drag Story",
                            Description =
                                "As a developer I want to drag a story to another state so I can move a story directly to done when I was to lazy to update the story frequently.",
                            StackRank = 500,
                            State = "Sprint Backlog"
                        },
                };
        }

        public IEnumerable<UserStory> UserStories { get; private set; }
    }
}