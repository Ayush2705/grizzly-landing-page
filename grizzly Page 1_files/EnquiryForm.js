(0, l.jsx)("div", {
    id: "popupForm",
    className: "popup_form",
    style: {
        display: "flex", // Automatically show on page load
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000"
    },
    onClick: (e) => {
        if (e.target.id === "popupForm") {
            document.getElementById("popupForm").style.display = "none";
        }
    },
    children: (0, l.jsx)("div", {
        className: "form_container",
        style: {
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            width: "500px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            position: "relative"
        },
        children: [
            (0, l.jsx)("button", {
                className: "close_btn",
                style: {
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    fontSize: "18px",
                    cursor: "pointer"
                },
                onClick: () => document.getElementById("popupForm").style.display = "none",
                children: "✖"
            }),
            (0, l.jsx)("h2", { children: "Enquiry Form" }),
            (0, l.jsx)("form", {
                id: "enquiryForm",
                action: "https://formspree.io/f/xovenwlk",
                method: "POST",
                children: [
                    (0, l.jsxs)("div", {
                        className: "form_group",
                        style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" },
                        children: [
                            (0, l.jsx)("input", {
                                type: "text",
                                name: "candidate_name",
                                placeholder: "Candidate Name *",
                                required: true,
                                style: { width: "100%", padding: "8px" }
                            }),
                            (0, l.jsx)("input", {
                                type: "text",
                                name: "parent_name",
                                placeholder: "Father's / Mother's Name *",
                                required: true,
                                style: { width: "100%", padding: "8px" }
                            }),
                            (0, l.jsx)("select", {
                                name: "class",
                                required: true,
                                style: { width: "100%", padding: "8px" },
                                children: [
                                    (0, l.jsx)("option", { value: "", disabled: true, selected: true, children: "- Select -" }),
                                    "PG", "Nursery", "LKG", "UKG", "Std. 1", "Std. 2", "Std. 3", "Std. 4", "Std. 5", "Std. 6", "Std. 7", "Std. 8"
                                ].map(cls => (0, l.jsx)("option", { value: cls, children: cls }, cls))
                            }),
                            (0, l.jsx)("input", {
                                type: "text",
                                name: "city",
                                placeholder: "City *",
                                required: true,
                                style: { width: "100%", padding: "8px" }
                            }),
                            (0, l.jsx)("input", {
                                type: "text",
                                name: "state",
                                placeholder: "State *",
                                required: true,
                                style: { width: "100%", padding: "8px" }
                            }),
                            (0, l.jsx)("select", {
                                name: "day_scholar_boarder",
                                required: true,
                                style: { width: "100%", padding: "8px" },
                                children: [
                                    (0, l.jsx)("option", { value: "", disabled: true, selected: true, children: "- Select -" }),
                                    "Day Scholar", "Boarder"
                                ].map(option => (0, l.jsx)("option", { value: option, children: option }, option))
                            }),
                            (0, l.jsx)("input", {
                                type: "tel",
                                name: "mobile",
                                placeholder: "Mobile No. *",
                                required: true,
                                pattern: "\\d{10}",
                                title: "Enter a valid 10-digit phone number",
                                style: { width: "100%", padding: "8px" }
                            }),
                            (0, l.jsx)("input", {
                                type: "tel",
                                name: "whatsapp",
                                placeholder: "WhatsApp No. *",
                                required: true,
                                pattern: "\\d{10}",
                                title: "Enter a valid 10-digit phone number",
                                style: { width: "100%", padding: "8px" }
                            })
                        ]
                    }),
                    (0, l.jsx)("input", {
                        type: "text",
                        name: "verification_code",
                        placeholder: "Type Verification Code",
                        required: true,
                        style: { width: "100%", padding: "8px", marginTop: "10px" }
                    }),
                    (0, l.jsxs)("div", {
                        style: { display: "flex", justifyContent: "space-between", marginTop: "10px" },
                        children: [
                            (0, l.jsx)("button", {
                                type: "submit",
                                style: { backgroundColor: "green", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" },
                                children: "Submit"
                            }),
                            (0, l.jsx)("button", {
                                type: "button",
                                onClick: () => document.getElementById("popupForm").style.display = "none",
                                style: { backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" },
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    })
});
