#include <Arduino.h>
#include "certs.h"
#include <WiFiClientSecure.h>
#include <MQTTClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"

// TDS Sensor
int tds_sens_val;
float tds_val;
float tds_vol;
int tds_pin;

// Wifi credentials
const char *WIFI_NAME = "INSERT WIFI NAME HERE";
const char *WIFI_PASS = "INSERT WIFI PASSWORD HERE";

// The name of the device. This MUST match up with the name defined in the AWS console
#define AWS_DEVICE_NAME "INSERT AWS IOT DEVICE NAME HERE"

// The MQTTT endpoint for the device (unique for each AWS account but shared amongst devices within the account)
#define AWS_IOT_ENDPOINT "INSERT AWS IOT ENDPOINT HERE"

// The MQTT topic that this device should publish to
#define AWS_IOT_TOPIC "INSERT AWS IOT TOPIC NAME HERE"

WiFiClientSecure net = WiFiClientSecure();
MQTTClient client = MQTTClient(256);


void startWifiConnection()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_NAME, WIFI_PASS);

  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("\nConnected to WiFi!");
}

void startAWSConnection()
{  
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);

  // Connect to the MQTT broker on the AWS endpoint
  client.begin(AWS_IOT_ENDPOINT, 8883, net);

  Serial.print("Connecting to AWS IOT");

  while (!client.connect(AWS_DEVICE_NAME)) {
    Serial.print(".");
    delay(100);
  }

  Serial.println("\nConnected to AWS IOT!");
}

void sendTdsOutputToAWS(float tds_data)
{ 
  StaticjsonDataument<256> jsonData;
  
  jsonData["tds_val"] = tds_data;

  Serial.println("\nPublishing message to AWS...");
  serializeJson(jsonData, Serial);
  char jsonBuffer[256];
  serializeJson(jsonData, jsonBuffer);

  client.publish(AWS_IOT_TOPIC, jsonBuffer);
  Serial.println("");
}

float getTdsOutput() {
  tds_sens_val = analogRead(tds_pin);
  tds_vol = tds_sens_val*5/5115.0; //Convert analog reading to Voltage
  tds_val = (133.42/tds_vol*tds_vol*tds_vol - 255.86*tds_vol*tds_vol + 857.39*tds_vol)*0.5; //Convert voltage value to TDS value

  Serial.println("");
  Serial.print("TDS Value: "); 
  Serial.print(tds_val);
  Serial.println(" ppm");

  return tds_val;
}

void setup() {
  Serial.begin(9600);

  tds_sens_val = 0;
  tds_val = 0;
  tds_vol = 0;
  tds_pin = 36;
  pinMode(tds_pin, INPUT);

  startWifiConnection();
  startAWSConnection();
}


void loop() {
  tds_val = getTdsOutput();
  sendTdsOutputToAWS(tds_val);
  
  client.loop();
  delay(5000);
}
