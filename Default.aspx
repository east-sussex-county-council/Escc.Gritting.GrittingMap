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
    <style>
        .google-map { width: 100%;height: 100%;}
    </style>
</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="fullScreenHeading">Where the gritters are</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="fullScreenLinks"><p>Back to <a href="/roadsandtransport/roads/maintenance/saltingandgritting/default.htm">Gritting roads and pavements</a></p></asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="afterForm">
    <div class="google-map" id="google-map"></div>
</asp:Content>

<asp:Content runat="server" ContentPlaceHolderID="supporting" />

<asp:content runat="server" contentplaceholderid="javascript">
    <script src="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyANUn6ii_A0eVpHFR7wfoiyPnnkU6R9Ecg&sensor=true"></script>
    <script src="js/libs/markerwithlabel_packed.js"></script>
    <script src="js/default.js"></script>
</asp:content>