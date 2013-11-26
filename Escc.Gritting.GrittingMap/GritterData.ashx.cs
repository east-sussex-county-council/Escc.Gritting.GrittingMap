using System.Web;
using Escc.Gritting.SqlServer;
using EsccWebTeam.Data.Web;

namespace Escc.Gritting.GrittingMap
{
    /// <summary>
    /// Provide data on gritters data as JSON
    /// </summary>
    public class GritterData : IHttpHandler
    {
        /// <summary>
        /// Enables processing of HTTP Web requests by a custom HttpHandler that implements the <see cref="T:System.Web.IHttpHandler"/> interface.
        /// </summary>
        /// <param name="context">An <see cref="T:System.Web.HttpContext"/> object that provides references to the intrinsic server objects (for example, Request, Response, Session, and Server) used to service HTTP requests.</param>
        public void ProcessRequest(HttpContext context)
        {
            var repo = new SqlServerGritterRepository();

            WriteResponseAsJson(context, repo);
        }

        /// <summary>
        /// Writes the response as JSON.
        /// </summary>
        /// <param name="context">The context.</param>
        /// <param name="repo">The repo.</param>
        private static void WriteResponseAsJson(HttpContext context, IGritterDataRepository repo)
        {
            context.Response.ContentType = "text/javascript";
            
            Http.CacheFor(0,1);

            context.Response.Write("[");
            var first = true;
            foreach (var gritter in repo.ReadAllGritters())
            {
                if (!first)
                {
                    context.Response.Write(",");
                }
                first = false;

                context.Response.Write("{\"id\":\"" + gritter.GritterId + "\",\"name\":\"" + gritter.GritterName + "\",\"lat\":" + gritter.Latitude + ",\"lng\":" + gritter.Longitude + ",\"status\":\"" + gritter.Status + "\"}");
            }
            context.Response.Write("]");
        }

        /// <summary>
        /// Gets a value indicating whether another request can use the <see cref="T:System.Web.IHttpHandler"/> instance.
        /// </summary>
        /// <value></value>
        /// <returns>true if the <see cref="T:System.Web.IHttpHandler"/> instance is reusable; otherwise, false.</returns>
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}