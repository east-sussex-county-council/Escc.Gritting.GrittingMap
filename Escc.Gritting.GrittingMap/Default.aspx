<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Escc.Gritting.GrittingMap.DefaultPage" %>
<asp:Content runat="server" ContentPlaceHolderID="metadata">
	<Egms:MetadataControl id="headContent" runat="server" 
		Title="Where the gritters are in East Sussex" 
		IpsvPreferredTerms="Salting and gritting"
		LgtlType="Maps"
		DateCreated="2013-10-28"
		Creator="Head of Highways, East Sussex County Council"
		Description="Map showing the current location of gritters in East Sussex"
		LgslNumbers="561"
		/>
    <Egms:Css runat="server" Files="GrittingMap" />
</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="fullScreenHeading">Where the gritters are</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="fullScreenLinks"><p>Back to <a href="/roadsandtransport/roads/maintenance/saltingandgritting/default.htm">Gritting roads and pavements</a></p>
<p class="accessible"><a href="/roadsandtransport/roads/maintenance/saltingandgritting/disclaimer.htm">Gritting routes information &#8211; disclaimer</a></p></asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="afterForm">
    <div class="map-controls" id="map-controls">
        <form>
            <input type="text" id="google-location" />
            <input type="submit" id="google-search" value="Search" />
        </form>
    </div>
    <div class="google-map" id="google-map"></div>
</asp:Content>

<asp:Content runat="server" ContentPlaceHolderID="supporting" />

<asp:content runat="server" contentplaceholderid="javascript">
    <Egms:Script runat="server" Files="GoogleMaps;GrittingMap" Moveable="False"/>
</asp:content>