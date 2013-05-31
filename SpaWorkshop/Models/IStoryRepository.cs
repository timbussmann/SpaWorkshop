namespace SpaWorkshop.Models
{
    using System.Collections.Generic;

    public interface IStoryRepository
    {
        IEnumerable<UserStory> UserStories { get; }
    }
}