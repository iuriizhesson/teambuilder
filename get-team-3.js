        function getTeamNumber(index) {
            return index % 3 + 1;
        }

        function getTeamColor(index) {
            switch (getTeamNumber(index)) {
                case 1:
                    return "#FDB913"
                case 2:
                    return "#006A44"
                case 3:
                default:
                    return "#C1272D"
            }
        }
