Feature: Add and Remove element on the website

  Scenario: Add Element on the website
    Given I am on the main page of test website
    When  I click on AddRemove Elements "Add/Remove Elements"
    Then  I Should see Add Element "Add Element"
    When  I click on Add Element "Add Element"
    Then  I should see Delete button "Delete"

  # Scenario: Delete Element on the website
  #   Given I am on the main page of test website
  #   When  I click on AddRemove Elements "Add/Remove Elements"
  #   Then  I Should see Add Element "Add Element"
  #   When  I click on Add Element "Add Element"
  #   Then  I should see Delete button "Delete"
  #   When  I click on Delete button "Delete"
  #   Then  I Should see Add Element "Add Element"