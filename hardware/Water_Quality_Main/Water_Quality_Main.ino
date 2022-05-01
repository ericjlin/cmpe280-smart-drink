#include <Arduino.h>
#include "certs.h"
#include <WiFiClientSecure.h>
#include <MQTTClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"

// TDS Sensor
int tds_sensor_value;
float tds_value;
float tds_voltage;
int tds_pin;

// Wifi credentials
const char *WIFI_SSID = "";
const char *WIFI_PASSWORD = "";

// The name of the device. This MUST match up with the name defined in the AWS console
#define DEVICE_NAME ""

// The MQTTT endpoint for the device (unique for each AWS account but shared amongst devices within the account)
#define AWS_IOT_ENDPOINT ""

// The MQTT topic that this device should publish to
#define AWS_IOT_TOPIC ""

WiFiClientSecure net = WiFiClientSecure();
MQTTClient client = MQTTClient(256);


void connectToWifi()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("\nConnected to WiFi!");
}

void connectToAWS()
{  
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);

  // Connect to the MQTT broker on the AWS endpoint
  client.begin(AWS_IOT_ENDPOINT, 8883, net);

  Serial.print("Connecting to AWS IOT");

  while (!client.connect(DEVICE_NAME)) {
    Serial.print(".");
    delay(100);
  }

  Serial.println("\nConnected to AWS IOT!");
}

void sendJsonToAWS(float tds_data)
{ 
  StaticJsonDocument<256> jsonDoc;
  
  jsonDoc["tds_value"] = tds_data;

  Serial.println("\nPublishing message to AWS...");
  serializeJson(jsonDoc, Serial);
  char jsonBuffer[256];
  serializeJson(jsonDoc, jsonBuffer);

  client.publish(AWS_IOT_TOPIC, jsonBuffer);
  Serial.println("");
}

float getTdsData() {
  tds_sensor_value = analogRead(tds_pin);
  tds_voltage = tds_sensor_value*5/5115.0; //Convert analog reading to Voltage
  tds_value = (133.42/tds_voltage*tds_voltage*tds_voltage - 255.86*tds_voltage*tds_voltage + 857.39*tds_voltage)*0.5; //Convert voltage value to TDS value

  Serial.println("");
  Serial.print("TDS Value: "); 
  Serial.print(tds_value);
  Serial.println(" ppm");

  return tds_value;
}

void setup() {
  Serial.begin(9600);

  tds_sensor_value = 0;
  tds_value = 0;
  tds_voltage = 0;
  tds_pin = 36;
  pinMode(tds_pin, INPUT);

  connectToWifi();
  connectToAWS();
}


void loop() {
  tds_value = getTdsData();
  sendJsonToAWS(tds_value);
  
  client.loop();
  delay(5000);
}
