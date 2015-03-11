using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Favorit.es_Extended.Startup))]
namespace Favorit.es_Extended
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
