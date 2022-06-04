
<%@tag description="Simple Wrapper Tag" pageEncoding="UTF-8"%>
<html>
<head>
<link rel="stylesheet" href="${path}/css/app.css">
</head>
<body>
<jsp:include page="/WEB-INF/tags/partials/header.jsp" flush="true"/>
  <jsp:doBody/>
<jsp:include page="/WEB-INF/tags/partials/footer.jsp" flush="true"/>
<script src="${path}/js/app.js"></script>
</body>
</html>