const state = () => ({
    background_color_mapping: {
      "Scheduled": "#FFE5C7",
      "Needs Approval": "#EADFF6",
      "Published": "#CFEFE5",
      "Failed to post": "#FFD6D9",
    },
    status_icon_mapping: {
      "Scheduled": "fa fa-clock-o",
      "Needs Approval": "fa fa-hand-paper-o",
      "Published": "fa fa-check",
      "Failed to post": "fa fa-exclamation-circle",
    },
    color_mapping: {
      "Scheduled": "#ED8A17",
      "Needs Approval": "#2A0C4E",
      "Published": "#2F9876",
      "Failed to post": "#EF4454",
      "" : "#7B7B7B"
    }
  });
  
  const getters = {
    get_background_color_mapping: (state) => state.background_color_mapping,
    get_status_icon_mapping: (state) =>state.status_icon_mapping,
    get_color_mapping: (state) => state.color_mapping
  };
  
  export default { state, getters };
  