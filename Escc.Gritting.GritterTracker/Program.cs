﻿
using System;
using Escc.Gritting.Fleetstar;
using Escc.Gritting.SqlServer;
using Exceptionless;

namespace Escc.Gritting.GritterTracker
{
    /// <summary>
    /// Update data on the positions of gritters from the data source to the repository used by the UI
    /// </summary>
    class Program
    {
        static void Main()
        {
            ExceptionlessClient.Current.Startup();
            try
            {
                UpdateGritterData(new FleetstarRepository(), new SqlServerGritterRepository());
            }
            catch (Exception e)
            {
                e.ToExceptionless().Submit();
                ExceptionlessClient.Current.ProcessQueue();
                throw;
            }
        }

        private static void UpdateGritterData(IGritterDataSource fromRepository, IGritterDataRepository toRepository)
        {
            if (fromRepository == null) throw new ArgumentNullException("fromRepository");
            if (toRepository == null) throw new ArgumentNullException("toRepository");

            foreach (var gritter in fromRepository.ReadAllGritters())
            {
                toRepository.SaveGritter(gritter);
            }
        }
    }
}
