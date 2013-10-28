using System;
using System.Globalization;

namespace Escc.Gritting.GrittingMap
{
    public partial class DefaultPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.headContent.DateModified = DateTime.Today.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture);
        }
    }
}
