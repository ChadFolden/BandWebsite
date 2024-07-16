function addToAppleCalendar(date, time, description, location, locationUrl) {
    var startDate = new Date(date + " " + time);
    var endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Adding 1 hour duration

    var event = {
        startDate: startDate,
        endDate: endDate,
        description: description,
        location: location,
        url: locationUrl
    };

    var params = {
        url: 'data:text/calendar;charset=utf8,' + encodeURIComponent(createAppleCalendarEvent(event)),
        filename: 'event.ics'
    };

    window.open(params.url, params.filename);
}

function addToAndroidCalendar(date, time, description, location, locationUrl) {
    var startDate = new Date(date + " " + time);
    var endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Adding 1 hour duration

    var event = {
        startDate: startDate,
        endDate: endDate,
        title: description,
        location: location,
        description: description
    };

    var params = {
        url: 'https://www.google.com/calendar/render?action=TEMPLATE'
            + '&dates=' + encodeURIComponent(formatDate(startDate)) + '/' + encodeURIComponent(formatDate(endDate))
            + '&details=' + encodeURIComponent(event.description)
            + '&location=' + encodeURIComponent(event.location)
            + '&text=' + encodeURIComponent(event.title)
    };

    window.open(params.url, '_blank');
}

function addToGoogleCalendar(date, time, description, location, locationUrl) {
    var startDate = new Date(date + " " + time);
    var endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Adding 1 hour duration

    var params = {
        url: 'https://www.google.com/calendar/render?action=TEMPLATE'
            + '&dates=' + encodeURIComponent(formatDate(startDate)) + '/' + encodeURIComponent(formatDate(endDate))
            + '&details=' + encodeURIComponent(description)
            + '&location=' + encodeURIComponent(location)
            + '&text=' + encodeURIComponent(description)
    };

    window.open(params.url, '_blank');
}

function addToOutlookCalendar(date, time, description, location, locationUrl) {
    var startDate = new Date(date + " " + time);
    var endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Adding 1 hour duration

    var event = {
        startDate: startDate,
        endDate: endDate,
        description: description,
        location: location,
        url: locationUrl
    };

    var params = {
        url: 'data:text/calendar;charset=utf8,' + encodeURIComponent(createOutlookCalendarEvent(event)),
        filename: 'event.ics'
    };

    window.open(params.url, params.filename);
}

// Helper function to format date for Google Calendar
function formatDate(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
}

// Helper function to create Apple Calendar event in .ics format
function createAppleCalendarEvent(event) {
    var startDateUTC = event.startDate.toUTCString();
    var endDateUTC = event.endDate.toUTCString();

    var calendarEvent = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'BEGIN:VEVENT\n' +
        'DTSTART:' + startDateUTC + '\n' +
        'DTEND:' + endDateUTC + '\n' +
        'SUMMARY:' + event.description + '\n' +
        'LOCATION:' + event.location + '\n' +
        'URL:' + event.url + '\n' +
        'END:VEVENT\n' +
        'END:VCALENDAR';

    return calendarEvent;
}

// Helper function to create Outlook Calendar event in .ics format
function createOutlookCalendarEvent(event) {
    var startDateUTC = event.startDate.toUTCString();
    var endDateUTC = event.endDate.toUTCString();

    var calendarEvent = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'BEGIN:VEVENT\n' +
        'DTSTART:' + startDateUTC + '\n' +
        'DTEND:' + endDateUTC + '\n' +
        'SUMMARY:' + event.description + '\n' +
        'LOCATION:' + event.location + '\n' +
        'URL:' + event.url + '\n' +
        'END:VEVENT\n' +
        'END:VCALENDAR';

    return calendarEvent;
}
