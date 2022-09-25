        function getTeamNumber(index) {
            return index % 2 + 1;
        }

        function getTeamColor(index) {
            switch (getTeamNumber(index)) {
                case 1:
                    return "#0057B7"
                case 2:
                default:
                    return "#FFD700"
            }
        }
