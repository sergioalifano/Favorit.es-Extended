using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Favorit.es_Extended.Models
{
    /// <summary>
    /// this view model represents what the users interacts with the on main page.  the user favorites is included so that we can see if the user has already favorited an image that has come back in the results.
    /// </summary>
    public class SearchViewModel
    {
        public string SearchText { get; set; }
        public List<Favorite> UserFavorites { get; set; }
        public FlickrNet.PhotoCollection PhotoCollection { get; set; }

        public bool IsPhotoFavorited(FlickrNet.Photo photo)
        {
            return UserFavorites.Any(x => x.PhotoId == photo.PhotoId);
        }

        public SearchViewModel() { }

        public SearchViewModel(string searchText, List<Favorite> favorites, FlickrNet.PhotoCollection photos)
        {
            this.SearchText = searchText;
            this.UserFavorites = favorites;
            this.PhotoCollection = photos;
        }
    }
}