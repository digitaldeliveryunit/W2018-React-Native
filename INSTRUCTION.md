Section 3: Components and APIs

Task 1. View component
Locate the file "src/screens/home/index.js"
Find and replace the Keyword: TODO 01 with below code

<View style={styles.singleCard}>
  <CardPlaceholder onReady={true}>
    <TouchableOpacity>
      <EventCard event={event} />
    </TouchableOpacity>
  </CardPlaceholder>
</View>

Task 2. FastImage component
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 02 with below code

<FastImage
  source={{ uri: event.imageUrl }} style={styles.image}
  resizeMode={FastImage.resizeMode.cover} />

Task 3. Text component
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 03 with below code

<Text style={styles.eventTitle} numberOfLines={2}>
  {event.eventName}
</Text>

Task 4. Text component
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 04 with below code

<Text style={styles.eventDescription} numberOfLines={1}>
  {event.eventLocation && event.eventLocation.locationName}
</Text>

Task 5. Text component
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 05 with below code

event.dateFrom && getDayDuration(event.dateFrom, event.dateTo) > 0 && (                
  <Text style={styles.eventDescription} numberOfLines={1}>
    {`${toDateString(event.dateFrom)} - ${toDateString(event.dateTo)}`}
  </Text>
)

Task 6. Text component
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 06 with below code

<Text style={styles.eventDescription}>
  <Text style={{ color: "#CBD34C" }}>• </Text>
  {`${event.eventType} Event`}
</Text>

Task 7. TouchableOpacity component
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 07 with below code

<TouchableOpacity style={styles.actionButton} onPress={this.onBookmark}>
  <Image
    source={require("../../assets/images/bookmark.png")}
    style={styles.icon}
  />
</TouchableOpacity>

Task 8. Image component
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 08 with below code

<Image
  source={require("../../assets/images/qrcode.png")}
  style={styles.icon}
/>

Task 9. DateCountDown component
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 09 with below code

<DateCountDown dateFrom={event.dateFrom} dateTo={event.dateTo} />
